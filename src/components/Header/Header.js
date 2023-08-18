import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import profilePic from "../../images/profile-pic.svg";

function Header({ isLoggedIn }) {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const moviesClass = location.pathname.match(/^\/movies/) ? "header__button hover-effect header__button_inactive" : "header__button hover-effect";
    const savedMoviesClass = location.pathname.match(/^\/saved-movies/) ? "header__button hover-effect header__button_inactive" : "header__button hover-effect";
    const profileClass = location.pathname.match(/^\/profile/) ? "header__button hover-effect header__button_inactive" : "header__button hover-effect";
    const mobileMoviesClass = location.pathname.match(/^\/movies/) ? "header__link-mobile  hover-effect header__link-mobile_active" : "header__link-mobile hover-effect";
    const mobileSavedMoviesClass = location.pathname.match(/^\/saved-movies/) ? "header__link-mobile hover-effect header__link-mobile_active" : "header__link-mobile hover-effect";
    const mobileProfileClass = location.pathname.match(/^\/profile/) ? "header__link-account hover-effect header__link-mobile_active" : "header__link-account hover-effect";
    const mobileMainClass = location.pathname === '/' ? "header__link-mobile hover-effect header__link-mobile_active" : "header__link-mobile hover-effect";

    const handleMenuClick = () => {
        setIsOpen(true);
    }

    const handleCloseClick = () => {
        setIsOpen(false);
    }

    return (
        <>
            {location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/notfound' ? (<></>) : (
                <>
                    {!isLoggedIn ? (
                        <header className={location.pathname === '/' ? "header__container-main" : "header__container"}>
                            <Link to="/">
                                <img className="header__logo hover-effect" src={logo} alt="logo" />
                            </Link>
                            <div className="header__links-mainpage">
                                <div className="header__link-container-main">
                                    <Link to="/signup" className="header__button-main hover-effect">Регистрация</Link>
                                    <Link to="/signin" className="header__button-main header__button-colored hover-effect">Войти</Link>
                                </div>
                            </div>
                        </header>
                    ) : (
                        <header className={location.pathname === '/' ? "header__container-main" : "header__container"}>
                            <Link to="/">
                                <img className="header__logo hover-effect" src={logo} alt="logo" />
                            </Link>
                            <div className="header__links">
                                <div className="header__link-container">
                                    <NavLink to="/movies" className={moviesClass}>Фильмы</NavLink>
                                    <NavLink to="/saved-movies" className={savedMoviesClass}>Сохранённые фильмы</NavLink>
                                </div>
                                <div className="header__link-container">
                                    <NavLink to="/profile" className={profileClass}>Аккаунт</NavLink>
                                    <div className="header__image-box">
                                        <img className="header__image" src={profilePic} alt="profile-pic" />
                                    </div>
                                </div>
                            </div>
                            <button className="header__button-mobile hover-effect" onClick={handleMenuClick}></button>
                        </header>
                    )}

                    <div className={`header__popup ${isOpen ? `header__popup_opened` : ""}`}>
                        <div className="header__popup-container">
                            <button className="header__popup-button hover-effect" onClick={handleCloseClick}></button>
                            <div className="header__popup-links">
                                <NavLink to="/" onClick={handleCloseClick} className={mobileMainClass} >Главная</NavLink>
                                <NavLink to="/movies" onClick={handleCloseClick} className={mobileMoviesClass}>Фильмы</NavLink>
                                <NavLink to="/saved-movies" onClick={handleCloseClick} className={mobileSavedMoviesClass}>Сохранённые фильмы</NavLink>
                                <div className="header__popup-account">
                                    <NavLink to="/profile" onClick={handleCloseClick} className={mobileProfileClass}>Аккаунт</NavLink>
                                    <div className="header__image-box">
                                        <img className="header__image" src={profilePic} alt="profile-pic" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>

    )
}

export default Header;