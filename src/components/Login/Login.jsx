import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <Link to="/">
                    <img className="login__logo" src={logo} alt="logo" />
                </Link>
                <h1 className="login__title">Рады видеть!</h1>
                <form className="login__form">
                    <FormInput 
                    text="E-mail"
                    type="email"
                    id="email"
                    placeholder="pochta@yandex.ru"
                    />
                    <FormInput 
                    text="Пароль"
                    type="password"
                    id="password"
                    />
                    <button className="login__button hover-effect" type="submit">Войти</button>
                    <div className="login__bottom-container">
                        <span className="login__text">Ещё не зарегистрированы?</span>
                        <Link className="login__text login__link hover-effect" to="/signup">Регистрация</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;