import "./Profile.css";
import { useEffect } from "react";
import { useFormWithValidation } from '../../hooks/useFormValidation';

import Preloader from "../Preloader/Preloader";

function Profile({ onSignOut, onUpdateUser, currentUser, isLoading }) {

    const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        })
    }, [currentUser.email, currentUser.name, setValues])

    function isDataNew() {
        return (
            currentUser.name === values.name && currentUser.email === values.email
        )
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({ email: values.email, name: values.name });
    }

    return (
        <>
            {isLoading ? <Preloader /> : (
                <main className="profile">
                    <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                    <form className="profile__container" onSubmit={handleSubmit}>
                        <div className="profile__info-container">
                            <span className="profile__text">Имя</span>
                            <input
                                className="profile__input"
                                type="text"
                                id="name-input"
                                required
                                placeholder="Имя"
                                name="name"
                                minLength={2}
                                maxLength={30}
                                value={values.name || ""}
                                pattern="^[A-Za-zА-Яа-яЁё\-\s]*"
                                onChange={handleChange}
                            />
                        </div>
                        <span className="profile__error">{errors.name}</span>
                        <div className="profile__info-container profile__info-container_underlined">
                            <span className="profile__text">E-mail</span>
                            <input
                                className="profile__input"
                                type="email"
                                id="email-input"
                                required
                                placeholder="Email"
                                name="email"
                                minLength={5}
                                maxLength={30}
                                value={values.email || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <span className="profile__error">{errors.email}</span>
                        <div className="profile__links">
                            <button className={`profile__link ${isDataNew() || !isValid ? "" : "hover-effect"}`} type="submit" disabled={isDataNew() || !isValid}>Редактировать</button>
                            <button className="profile__link profile__link_colored hover-effect" onClick={onSignOut}>Выйти из аккаунта</button>
                        </div>
                    </form>
                </main>
            )}
        </>
    )
}

export default Profile;