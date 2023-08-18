function filterQueryMovies(movies, userQuery) {
  const moviesByUserQuery = movies.filter((movie) => {
    const movieTitleRu = String(movie.nameRU).toLowerCase().trim();
    const movieTitleEng = String(movie.nameEN).toLowerCase().trim();
    const userMovie = userQuery.toLowerCase().trim();
    return movieTitleRu.includes(userMovie) || movieTitleEng.includes(userMovie);
  });

  return moviesByUserQuery;
}

function filterShortMovies(movies) {
  return movies.filter(movie => movie.duration < 40);
}

function isMovieSaved(savedMovies, movie) {
  if (savedMovies.length === 0 || !savedMovies) {
    return false;
  } else {
    return savedMovies.find((item) => {
      return item.movieId === (movie.id || movie.movieId);
    });
  }
}

const moviesEmount = (width) => {
  if (width > 1310) {
    return 12;
  } else if (width > 807) {
    return 8;
  } else {
    return 5;
  }
}

const addMoviesEmount = (width) => {
  if (width > 1270) {
    return 3;
  } else {
    return 2;
  }
}

export { filterQueryMovies, filterShortMovies, isMovieSaved, moviesEmount, addMoviesEmount }