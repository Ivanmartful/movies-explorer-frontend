import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <>
            <main className="saved-movies">
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard
                        title="33 слова о дизайне"
                        duration="1ч 47м"
                        image={card1}
                        isSaved={true}
                    />
                    <MoviesCard
                        title="Киноальманах «100 лет дизайна»"
                        duration="1ч 3м"
                        image={card2}
                        isSaved={false}
                    />
                    <MoviesCard
                        title="Баския: Взрыв реальности"
                        duration="1ч 21м"
                        image={card3}
                        isSaved={true}
                    />
                </MoviesCardList>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;