import "./Login.css";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";
import { useFormWithValidation } from '../../hooks/useFormValidation';

function Login({ onLogin, isLoggedIn, isLoading }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        onLogin(values.email, values.password);
    }

    if (isLoggedIn) {
        return <Navigate to="/movies" />;
    }

    return (
        <>
                <main className="login">
                    <div className="login__container">
                        <Link to="/">
                            <img className="login__logo" src={logo} alt="logo" />
                        </Link>
                        <h1 className="login__title">Рады видеть!</h1>
                        <form className="login__form" onSubmit={handleSubmit}>
                            <FormInput
                                text="E-mail"
                                type="email"
                                id="email"
                                error={errors.email}
                                value={values.email || ""}
                                onChange={handleChange}
                                placeholder="pochta@yandex.ru"
                            />
                            <FormInput
                                text="Пароль"
                                type="password"
                                id="password"
                                error={errors.password}
                                value={values.password || ""}
                                onChange={handleChange}
                            />
                            <button className={`login__button ${!isValid ? "" : "hover-effect"}`} type="submit" disabled={!isValid || isLoading}>Войти</button>
                            <div className="login__bottom-container">
                                <span className="login__text">Ещё не зарегистрированы?</span>
                                <Link className="login__text login__link hover-effect" to="/signup">Регистрация</Link>
                            </div>
                        </form>
                    </div>
                </main>
        </>
    )
}

export default Login;