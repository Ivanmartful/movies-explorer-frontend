import "./Movies.css";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

import { filterQueryMovies, filterShortMovies, isMovieSaved, MOVIES_EMOUNT, ADD_MOVIES_EMOUNT } from "../../utils/utils"

function Movies({ movies, savedMovies, onLike, onDelete, isLoading, setIsLoading }) {

	const [width, setWidth] = useState(window.innerWidth)

	const [queryMovies, setQueryMovies] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [shortMovies, setShortMovies] = useState(false);
	const [query, setQuery] = useState('');
	const [movieCounter, setMovieCounter] = useState(MOVIES_EMOUNT(width))
	const movieStep = ADD_MOVIES_EMOUNT(width)

	useEffect(() => {
		setTimeout(() => {
			window.addEventListener('resize', setWidth(window.innerWidth));
		}, 100);
	});

	useEffect(() => {

		const visibleMovies = JSON.parse(localStorage.getItem('visibleMovies'));
		const query = localStorage.getItem('query')
		const checkbox = JSON.parse(localStorage.getItem('checkbox'))

		if (query) {
			setQuery(query)
		}
		if (visibleMovies) {
			setQueryMovies(visibleMovies)
		}
		if (visibleMovies && checkbox) {
			setFilteredMovies(filterShortMovies(visibleMovies))
			setShortMovies(true)
		} else if (visibleMovies && !checkbox) {
			setFilteredMovies(visibleMovies)
			setShortMovies(false)
		}
	}, []);

	function showMoreHandler() {
		setMovieCounter(movieCounter + movieStep)
	};

	function setFilteredMoviesHandler(movies, query) {
		const moviesList = filterQueryMovies(movies, query);
		setQueryMovies(moviesList);
		if (moviesList.length === 0) {
			console.log('nothing found');
		}
		if (shortMovies) {
			const filteredMovieList = filterShortMovies(moviesList);
			setFilteredMovies(filteredMovieList);
		} else {
			setFilteredMovies(moviesList);
		}
		localStorage.setItem('visibleMovies', JSON.stringify(moviesList));
		localStorage.setItem('query', query);
	}

	function onQueryMovies(query) {
		setIsLoading(true);
		setTimeout(() => {
			setFilteredMoviesHandler(movies, query);
			setIsLoading(false);
		}, 100)
	}

	function handleShortMovies() {
		setIsLoading(true);
		setTimeout(() => {
			localStorage.setItem('checkbox', !shortMovies);
			setShortMovies(!shortMovies);
			if (!shortMovies) {
				const filteredShortList = filterShortMovies(filteredMovies);
				setFilteredMovies(filteredShortList);
				if (filteredShortList.length === 0) {
					console.log('nothing found');
				}
			} else {
				setFilteredMovies(queryMovies);
			}
			setIsLoading(false);
		}, 100)
	};

	return (
		<>
			<main className="movies">
				<SearchForm
					onQueryMovies={onQueryMovies}
					shortMovies={shortMovies}
					handleShortMovies={handleShortMovies}
					query={query}
					setQuery={setQuery}
				/>
				{isLoading ? <Preloader /> : (
					<MoviesCardList>
						{filteredMovies.slice(0, movieCounter).map((movie, index) => (
							<MoviesCard
								movie={movie}
								key={movie.id.toString() || index}
								title={movie.nameRU}
								duration={movie.duration}
								image={`https://api.nomoreparties.co/${movie.image.url}`}
								trailerLink={movie.trailerLink}
								onLike={onLike}
								onDelete={onDelete}
								movieSaved={isMovieSaved(savedMovies, movie)}
							/>
						))}
					</MoviesCardList>)}
				{
					!isLoading && filteredMovies.length === 0 ? <p className="movies__nothing-found-text">Ничего не найдено</p> : ""
				}
				{filteredMovies.length > movieCounter && !isLoading ?
					<button className="movies__button hover-effect" onClick={showMoreHandler}>Ещё</button>
					: ""
				}
			</main>
			<Footer />
		</>
	)
}

export default Movies;