import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";

function Register() {
    return (
        <div className="register">
            <div className="register__container">
                <Link to="/">
                    <img className="register__logo" src={logo} alt="logo" />
                </Link>
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form">
                    <FormInput 
                    text="Имя"
                    type="text"
                    id="name"
                    placeholder="Иван"
                    />
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
                    value="12341234123456"
                    error="Что-то пошло не так..."
                    />
                    <button className="register__button hover-effect" type="submit">Зарегистрироваться</button>
                    <div className="register__bottom-container">
                        <span className="register__text">Уже зарегистрированы?</span>
                        <Link className="register__text register__link hover-effect" to="/signin">Войти</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;