import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
    return (
        <section className="aboutproject" id="aboutproject">
            <SectionTitle text="О проекте" />
            <div className="aboutproject__container">
                <div className="aboutproject__texts">
                    <h3 className="aboutproject__title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="aboutproject__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="aboutproject__texts">
                    <h3 className="aboutproject__title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="aboutproject__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="aboutproject__elements">
                <div className="aboutproject__element aboutproject__element_green">1 неделя</div>
                <div className="aboutproject__element aboutproject__element_gray">4 недели</div>
                <div className="aboutproject__element aboutproject__element_transparent">Back-end</div>
                <div className="aboutproject__element aboutproject__element_transparent">Front-end</div>
            </div>
        </section>
    )
}

export default AboutProject;