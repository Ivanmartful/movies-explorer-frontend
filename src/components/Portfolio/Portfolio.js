import "./Portfolio.css";
import PortfolioLink from "../PortfolioLink/PortfolioLink";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
            Портфолио
            </h2>
            <div className="portfolio__links">
                <PortfolioLink text="Статичный сайт" link="https://github.com/Ivanmartful/how-to-learn"/>
                <PortfolioLink text="Адаптивный сайт" link="https://github.com/Ivanmartful/russian-travel"/>
                <PortfolioLink text="Одностраничное приложение" link="https://github.com/Ivanmartful/react-mesto-api-full-gha/tree/main"/>
            </div>
        </section>
    )
}

export default Portfolio;