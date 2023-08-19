/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__container">
                <div className="footer__copyright">© 2023</div>
                <div className="footer__links">
                    <a className="footer__link hover-effect" href="https://practicum.yandex.ru" target="_blank">
                        Яндекс.Практикум
                    </a>
                    <a className="footer__link hover-effect" href="https://github.com" target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer