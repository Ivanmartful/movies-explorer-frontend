import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ title, image, duration }) {
    const [isSaved, setIsSaved] = useState();
    const location = useLocation();
    
    const cardLikeButtonClassName = (
        `movies-card__button hover-effect ${isSaved && 'movies-card__button_active'}`
    );
    const handleClick = () => {
        setIsSaved(!isSaved);
    }

    return (
        <div className="movies-card">
            <img className="movies-card__image" src={image} alt={title} />
            <div className="movies-card__container">
                <h3 className="movies-card__title">{title}</h3>
                <button type="button" onClick={handleClick} className={location.pathname === '/movies' ? cardLikeButtonClassName : "movies-card__button hover-effect movies-card__button_added"}></button>
                <p className="movies-card__duration">{duration}</p>
            </div>
        </div>
    )
}

export default MoviesCard;