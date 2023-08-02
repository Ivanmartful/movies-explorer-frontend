import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <>
            <div className="profile">
                <h1 className="profile__title">Привет, Иван!</h1>
                <div className="profile__container">
                    <div className="profile__info-container profile__info-container_underlined">
                        <span className="profile__text">Имя</span>
                        <span className="profile__text">Иван</span>
                    </div>
                    <div className="profile__info-container">
                        <span className="profile__text">E-mail</span>
                        <span className="profile__text">pochta@yandex.ru</span>
                    </div>
                    <div className="profile__links">
                        <Link className="profile__link hover-effect" to="/">Редактировать</Link>
                        <Link className="profile__link profile__link_colored hover-effect" to="/">Выйти из аккаунта</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;