import "./SectionTitle.css";

function SectionTitle({ text }) {
    return (
        <div className="sectiontitle">
            <h2 className="sectiontitle__text">{text}</h2>
        </div>
    )
}

export default SectionTitle;