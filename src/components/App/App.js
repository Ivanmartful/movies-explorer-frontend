import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' />} />
      </Routes>
    </>
  );
}

export default App;
