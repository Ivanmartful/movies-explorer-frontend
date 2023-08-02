import "./Promo.css";
import promoLogo from "../../images/landing-logo.svg";

function Promo() {
    return (
        <div className="promo__container">
            <h1 className="promo__title">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <img className="promo__image" src={promoLogo} alt="promoLogo"/>
        </div>
    )
}

export default Promo;