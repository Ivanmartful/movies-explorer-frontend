import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import profilePic from "../../images/profile-pic.svg";

function Header() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(true);
    }

    const handleCloseClick = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Routes>
                <Route exact path="/" element={
                    <div className={location.pathname === '/' ? "header__container-main" : "header__container"}>
                        <Link to="/">
                            <img className="header__logo hover-effect" src={logo} alt="logo" />
                        </Link>
                        <div className="header__links-mainpage">
                            <div className="header__link-container-main">
                                <Link to="/signup" className="header__button-main hover-effect">Регистрация</Link>
                                <Link to="/signin" className="header__button-main header__button-colored hover-effect">Войти</Link>
                            </div>
                        </div>
                    </div>
                } />
                <Route path="/movies" element={
                    <>
                        <div className={location.pathname === '/' ? "header__container-main" : "header__container"}>
                            <Link to="/">
                                <img className="header__logo hover-effect" src={logo} alt="logo" />
                            </Link>
                            <div className="header__links">
                                <div className="header__link-container">
                                    <Link to="/movies" className="header__button hover-effect">Фильмы</Link>
                                    <Link to="/saved-movies" className="header__button header__button_inactive hover-effect">Сохранённые фильмы</Link>
                                </div>
                                <div className="header__link-container">
                                    <Link to="/profile" className="header__button hover-effect">Аккаунт</Link>
                                    <div className="header__image-box">
                                        <img className="header__image" src={profilePic} alt="profile-pic" />
                                    </div>
                                </div>
                            </div>
                            <button className="header__button-mobile hover-effect" onClick={handleMenuClick}></button>
                        </div>

                        <div className={`header__popup ${isOpen ? `header__popup_opened` : ""}`}>
                            <div className="header__popup-container">
                                <button className="header__popup-button hover-effect" onClick={handleCloseClick}></button>
                                <div className="header__popup-links">
                                    <Link to="/" onClick={handleCloseClick} className="header__link-mobile hover-effect">Главная</Link>
                                    <Link to="/movies" onClick={handleCloseClick} className="header__link-mobile header__link-mobile_active hover-effect">Фильмы</Link>
                                    <Link to="/saved-movies" onClick={handleCloseClick} className="header__link-mobile hover-effect">Сохранённые фильмы</Link>
                                    <div className="header__popup-account">
                                        <Link to="/profile" onClick={handleCloseClick} className="header__link-account hover-effect">Аккаунт</Link>
                                        <div className="header__image-box">
                                            <img className="header__image" src={profilePic} alt="profile-pic" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                } />
                <Route exact path="/saved-movies" element={
                    <>
                        <div className={location.pathname === '/' ? "header__container-main" : "header__container"}>
                            <Link to="/">
                                <img className="header__logo hover-effect" src={logo} alt="logo" />
                            </Link>
                            <div className="header__links">
                                <div className="header__link-container">
                                    <Link to="/movies" className="header__button header__button_inactive hover-effect">Фильмы</Link>
                                    <Link to="/saved-movies" className="header__button hover-effect">Сохранённые фильмы</Link>
                                </div>
                                <div className="header__link-container">
                                    <Link to="/profile" className="header__button hover-effect">Аккаунт</Link>
                                    <div className="header__image-box">
                                        <img className="header__image" src={profilePic} alt="profile-pic" />
                                    </div>
                                </div>
                            </div>
                            <button className="header__button-mobile hover-effect" onClick={handleMenuClick}></button>
                        </div>

                        <div className={`header__popup ${isOpen ? `header__popup_opened` : ""}`}>
                            <div className="header__popup-container">
                                <button className="header__popup-button hover-effect" onClick={handleCloseClick}></button>
                                <div className="header__popup-links">
                                    <Link to="/" onClick={handleCloseClick} className="header__link-mobile hover-effect">Главная</Link>
                                    <Link to="/movies" onClick={handleCloseClick} className="header__link-mobile hover-effect">Фильмы</Link>
                                    <Link to="/saved-movies" onClick={handleCloseClick} className="header__link-mobile header__link-mobile_active hover-effect">Сохранённые фильмы</Link>
                                    <div className="header__popup-account">
                                        <Link to="/profile" onClick={handleCloseClick} className="header__link-account hover-effect">Аккаунт</Link>
                                        <div className="header__image-box">
                                            <img className="header__image" src={profilePic} alt="profile-pic" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                } />
                <Route path="/profile" element={
                    <>
                    <div className={location.pathname === '/' ? "header__container-main" : "header__container"}>
                        <Link to="/">
                            <img className="header__logo hover-effect" src={logo} alt="logo" />
                        </Link>
                        <div className="header__links">
                            <div className="header__link-container">
                                <Link to="/movies" className="header__button hover-effect">Фильмы</Link>
                                <Link to="/saved-movies" className="header__button header__button_inactive hover-effect">Сохранённые фильмы</Link>
                            </div>
                            <div className="header__link-container">
                                <Link to="/profile" className="header__button hover-effect">Аккаунт</Link>
                                <div className="header__image-box">
                                    <img className="header__image" src={profilePic} alt="profile-pic" />
                                </div>
                            </div>
                        </div>
                        <button className="header__button-mobile hover-effect" onClick={handleMenuClick}></button>
                    </div>

                    <div className={`header__popup ${isOpen ? `header__popup_opened` : ""}`}>
                            <div className="header__popup-container">
                                <button className="header__popup-button hover-effect" onClick={handleCloseClick}></button>
                                <div className="header__popup-links">
                                    <Link to="/" onClick={handleCloseClick} className="header__link-mobile hover-effect">Главная</Link>
                                    <Link to="/movies" onClick={handleCloseClick} className="header__link-mobile hover-effect">Фильмы</Link>
                                    <Link to="/saved-movies" onClick={handleCloseClick} className="header__link-mobile hover-effect">Сохранённые фильмы</Link>
                                    <div className="header__popup-account">
                                        <Link to="/profile" onClick={handleCloseClick} className="header__link-account header__link-mobile_active hover-effect">Аккаунт</Link>
                                        <div className="header__image-box">
                                            <img className="header__image" src={profilePic} alt="profile-pic" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                } />
            </Routes>
        </>

    )
}

export default Header;