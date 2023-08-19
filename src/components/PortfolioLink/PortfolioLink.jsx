/* eslint-disable react/jsx-no-target-blank */
import "./PortfolioLink.css";

function PortfolioLink({ text, link }) {
    return (
        <a className="portfoliolink" href={link} target="_blank">
            <div className="portfoliolink__text">{text}</div>
            <p className="portfoliolink__icon hover-effect">
            ↗
            </p>
        </a>
    )
}

export default PortfolioLink;