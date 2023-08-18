import "./SavedMovies.css";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import { filterQueryMovies, filterShortMovies, isMovieSaved } from "../../utils/utils"

function SavedMovies({ savedMovies, onDelete, isLoading, setIsLoading }) {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [queryMovies, setQueryMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  function setFilteredMoviesHandler(movies, query) {
    const moviesList = filterQueryMovies(movies, query);
    setQueryMovies(moviesList);
    if (moviesList.length === 0) {
    }
    if (shortMovies) {
      setFilteredMovies(filterShortMovies(moviesList));
    } else {
      setFilteredMovies(moviesList);
    }
  };

  function onQueryMovies(query) {
    setIsLoading(true);
    setTimeout(() => {
      setFilteredMoviesHandler(savedMovies, query);
      setIsLoading(false);
    }, 100)
  };

  function handleShortMovies() {
    setIsLoading(true);
    setTimeout(() => {
      if (!shortMovies) {
        const filteredShortList = filterShortMovies(filteredMovies);
        setFilteredMovies(filteredShortList);
        if (filteredShortList.length === 0) {
        }
      } else {
        setFilteredMovies(queryMovies.length !== 0 ? queryMovies : savedMovies);
      }
      setShortMovies(!shortMovies);
      setIsLoading(false);
    }, 100)
  };

  return (
    <>
      <main className="saved-movies">
        <SearchForm
          onQueryMovies={onQueryMovies}
          shortMovies={shortMovies}
          handleShortMovies={handleShortMovies}
          query={query}
          setQuery={setQuery}
        />
        {isLoading ? <Preloader /> : (
          <MoviesCardList>
            {filteredMovies.map((movie, index) => (
              <MoviesCard
                movie={movie}
                key={movie._id.toString() || index}
                title={movie.nameRU}
                duration={movie.duration}
                image={movie.image}
                trailerLink={movie.trailerLink}
                onDelete={onDelete}
                movieSaved={isMovieSaved(savedMovies, movie)}
              />
            ))}
          </MoviesCardList>
        )}
        {
          !isLoading && filteredMovies.length === 0 ? <p className="saved-movies__nothing-found-text">Ничего не найдено</p> : ""
        }
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;