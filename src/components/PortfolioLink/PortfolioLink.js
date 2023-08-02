/* eslint-disable react/jsx-no-target-blank */
import "./PortfolioLink.css";

function PortfolioLink({ text, link }) {
    return (
        <div className="portfoliolink">
            <div className="portfoliolink__text">{text}</div>
            <a className="portfoliolink__icon hover-effect" href={link} target="_blank">
            ↗
            </a>
        </div>
    )
}

export default PortfolioLink;