import "./NavTab.css";

function NavTab() {
    return (
        <div className="navtab__container">
            <nav className="navtab__links">
                    <a href="#aboutproject" className="navtab__link hover-effect">О проекте</a>
                    <a href="#techs" className="navtab__link hover-effect">Технологии</a>
                    <a href="#aboutme" className="navtab__link hover-effect">Студент</a>
            </nav>
        </div>
    )
}

export default NavTab;