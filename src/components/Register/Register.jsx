import "./Register.css";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";
import { useFormWithValidation } from '../../hooks/useFormValidation';

function Register({ onRegister, isLoggedIn, isLoading }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        onRegister(values.name, values.email, values.password);
    }

    if (isLoggedIn) {
        return <Navigate to="/movies" />;
    }

    return (
        <>
                <main className="register">
                    <div className="register__container">
                        <Link to="/">
                            <img className="register__logo" src={logo} alt="logo" />
                        </Link>
                        <h1 className="register__title">Добро пожаловать!</h1>
                        <form className="register__form" onSubmit={handleSubmit}>
                            <FormInput
                                text="Имя"
                                type="text"
                                id="name"
                                placeholder="Имя"
                                error={errors.name}
                                value={values.name || ""}
                                onChange={handleChange}
                            />
                            <FormInput
                                text="E-mail"
                                type="email"
                                id="email"
                                placeholder="pochta@yandex.ru"
                                error={errors.email}
                                value={values.email || ""}
                                onChange={handleChange}
                            />
                            <FormInput
                                text="Пароль"
                                type="password"
                                id="password"
                                error={errors.password}
                                value={values.password || ""}
                                onChange={handleChange}
                            />
                            <button className={`register__button ${!isValid ? "" : "hover-effect"}`} type="submit" disabled={!isValid || isLoading}>Зарегистрироваться</button>
                            <div className="register__bottom-container">
                                <span className="register__text">Уже зарегистрированы?</span>
                                <Link className="register__text register__link hover-effect" to="/signin">Войти</Link>
                            </div>
                        </form>
                    </div>
                </main>
        </>
    )
}

export default Register;