import "./Techs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
    return (
        <section className="techs" id="techs">
            <SectionTitle text="Технологии"/>
            <div className="techs__container">
                <h2 className="techs__title">
                7 технологий
                </h2>
                <p className="techs__subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className="techs__list">
                    <li>
                        <div className="techs__element">HTML</div>
                    </li>
                    <li>
                        <div className="techs__element">CSS</div>
                    </li>
                    <li>
                        <div className="techs__element">JS</div>
                    </li>
                    <li>
                        <div className="techs__element">React</div>
                    </li>
                    <li>
                        <div className="techs__element">Git</div>
                    </li>
                    <li>
                        <div className="techs__element">Express.js</div>
                    </li>
                    <li>
                        <div className="techs__element">mongoDB</div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;