import "./SearchForm.css";
import searchImg from "../../images/seach-pic.svg";
import Checkbox from "../Checkbox/Checkbox";
import { useEffect } from 'react';

function SearchForm({ onQueryMovies, shortMovies, handleShortMovies, query, setQuery }) {

	useEffect(() => {
		setQuery(query)
	}, [query, setQuery])

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		onQueryMovies(query);
	}

	return (
		<>
			<section className="search">
				<div className="search__container">
					<img className="search__image" src={searchImg} alt="seach-img" />
					<form className="search__form" onSubmit={handleSubmit}>
						<input
							className="search__form-input"
							type="text"
							maxLength={50}
							placeholder="Фильм"
							value={query}
							onChange={handleInputChange}
						/>
						<button
							className="search__form-button hover-effect"
							type="submit"
						>Найти</button>
					</form>
				</div>
				<div className="search__checkbox">
					<Checkbox shortMovies={shortMovies}
						handleShortMovies={handleShortMovies} />
					<p className="search__checkbox-title">
						Короткометражки
					</p>
				</div>
			</section>
		</>
	)
}

export default SearchForm;