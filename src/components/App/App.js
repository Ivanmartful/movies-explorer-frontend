/* eslint-disable no-lone-blocks */
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import Header from '../Header/Header';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infoToolTip, setInfoToolTip] = useState({
    isOpen: false,
    isSuccess: false,
    text: ""
  });

  console.log(isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .checkToken()
        .then((data) => {
          if (data) {
            setCurrentUser(data);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoad(true);
        })
    } else {
      setLoad(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => console.log(err));

      mainApi
        .getUserMovies()
        .then((userMovies) => {
          setSavedMovies(userMovies.reverse());

        })
        .catch((err) => console.log(err))
    }
  }, [isLoggedIn]);


  function handleRegister(name, email, password) {
    mainApi
      .registerUser(name, email, password)
      .then((data) => {
        if (data._id) {
          setInfoToolTip({
            isOpen: true,
            isSuccess: true,
            text: "Добро пожаловать!"
          });
          handleLogin(data.email, password);
        }
      })
      .catch((err) => {
        setInfoToolTip({
          isOpen: true,
          isSuccess: false,
          text: err
        })
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .loginUser(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          navigate('/movies', { replace: true });
          setIsLoggedIn(true);
          setInfoToolTip({
            isOpen: true,
            isSuccess: true,
            text: "С возвращением!"
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTip({
          isOpen: true,
          isSuccess: false,
          text: err
        });
      });
  }

  function handleSignOut() {
    localStorage.clear()
    setIsLoggedIn(false);
    navigate('/', { replace: true });
    setCurrentUser("");
  }

  function handleUpdateUser(email, name) {
    setIsLoading(true);
    mainApi
      .updateUser(email, name)
      .then((newData) => {
        setCurrentUser(newData);
        setInfoToolTip({
          isOpen: true,
          isSuccess: true,
          text: "Данные обновлены"
        });
      })
      .catch(err => {
        console.log(err);
        setInfoToolTip({
          isOpen: true,
          isSuccess: false,
          text: err
        });
      })
      .finally(() => setIsLoading(false));
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then(newMovie => setSavedMovies([newMovie, ...savedMovies]))
      .catch(err => {
        console.log(err);
        setInfoToolTip({
          isOpen: true,
          isSuccess: false,
          text: err
        });
      }
      );
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find(
      (newMovie) => newMovie.movieId === movie.id || newMovie.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(newMovie => {
          if (movie.id === newMovie.movieId || movie.movieId === newMovie.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newSavedMovies);
      })
      .catch(err => {
        console.log(err);
        setInfoToolTip({
          isOpen: true,
          isSuccess: false,
          text: err
        });
      });
  }

  function closePopup() {
    setInfoToolTip({
      isOpen: false,
      isSuccess: false,
      text: ""
    });
  }

  return (
    <>
      {!load ? (<Preloader />) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<Register onRegister={handleRegister} isLoggedIn={isLoggedIn} />} />
            <Route path='/signin' element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
            <Route path='/profile' element={
              <ProtectedRoute
                component={Profile}
                isLoggedIn={isLoggedIn}
                onSignOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
                currentUser={currentUser}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            } />
            <Route path='/movies' element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                component={Movies}
                movies={movies}
                savedMovies={savedMovies}
                onLike={handleSaveMovie}
                onDelete={handleDeleteMovie}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            } />
            <Route path='/saved-movies' element={
              <ProtectedRoute
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                onDelete={handleDeleteMovie}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            } />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/notfound' />} />
          </Routes>
          <InfoToolTip
            infoToolTip={infoToolTip}
            onClose={closePopup}
          />
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
