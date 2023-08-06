import "./SearchForm.css";
import searchImg from "../../images/seach-pic.svg";
import Checkbox from "../Checkbox/Checkbox";

function SearchForm() {

    return (
        <>
            <section className="search">
                <div className="search__container">
                    <img className="search__image" src={searchImg} alt="seach-img" />
                    <form className="search__form">
                        <input
                            className="search__form-input"
                            type="text"
                            minLength={2}
                            maxLength={50}
                            placeholder="Фильм"
                            required
                        />
                        <button
                            className="search__form-button hover-effect"
                            type="submit"
                        >Найти</button>
                    </form>
                </div>
                <div className="search__checkbox">
                    <Checkbox />
                    <p className="search__checkbox-title">
                        Короткометражки
                    </p>
                </div>
            </section>
        </>
    )
}

export default SearchForm;