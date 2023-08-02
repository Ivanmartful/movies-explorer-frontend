import "./MoviesCardList.css";

function MoviesCardList({children}) {
    return (
        <section className="movies-cardlist">
            {children}
        </section>
    )
}

export default MoviesCardList;