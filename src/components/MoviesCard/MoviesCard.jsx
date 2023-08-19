/* eslint-disable react/jsx-no-target-blank */
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, title, duration, image, trailerLink, onLike, onDelete, movieSaved}) {
    const location = useLocation();
    
    const cardLikeButtonClassName = (
        `movies-card__button hover-effect ${movieSaved && 'movies-card__button_active'}`
    );

    const durationUpdate = (duration) => {
        let hours = Math.trunc(duration / 60);
        let minutes = duration % 60;
        if (hours === 0) {
            return `${minutes}м`;
        } else if (minutes === 0) {
            return `${hours}ч`;
        } else {
        return `${hours}ч ${minutes}м`;
        }
      };

    const handleLikeClick = () => {
        onLike(movie);
    }

    const handleDeleteClick = () => {
        onDelete(movie);
    }

    return (
        <div className="movies-card">
            <a href={trailerLink} target="_blank"><img className="movies-card__image" src={image} alt={title} /></a>
            <div className="movies-card__container">
                <h3 className="movies-card__title">{title}</h3>
                <button type="button" onClick={movieSaved ? handleDeleteClick : handleLikeClick} className={location.pathname === '/movies' ? cardLikeButtonClassName : "movies-card__button hover-effect movies-card__button_added"}></button>
                <p className="movies-card__duration">{durationUpdate(duration)}</p>
            </div>
        </div>
    )
}

export default MoviesCard;