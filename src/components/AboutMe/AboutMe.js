/* eslint-disable react/jsx-no-target-blank */
import "./AboutMe.css";
import authorPic from "../../images/author-pic.jpeg";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
    return (
        <section className="aboutme" id="aboutme">
            <SectionTitle text="Студент" />
            <div className="aboutme__container">
                <div className="aboutme__texts">
                    <h2 className="aboutme__title">
                        Иван
                    </h2>
                    <p className="aboutme__subtitle">
                        Фронтенд-разработчик, 23 года
                    </p>
                    <p className="aboutme__description">
                        Я родился и живу в Нижнем Новгороде, учусь на радиофизическом факультете ННГУ.
                        Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a href="https://github.com" className="aboutme__link hover-effect" target="_blank">GitHub</a>
                </div>
                <img className="aboutme__image" src={authorPic} alt="author"/>
            </div>
        </section>
    )
}

export default AboutMe;