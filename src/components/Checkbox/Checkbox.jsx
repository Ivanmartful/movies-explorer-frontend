import "./Checkbox.css";

function Checkbox({ handleShortMovies, shortMovies }) {

    return (
        <>
            <label className="checkbox-ios">
                <input
                    type="checkbox"
                    onChange={handleShortMovies}
                    checked={shortMovies ? true : false}
                />
                <span className="checkbox-ios-switch"></span>
            </label>
        </>
    )
}

export default Checkbox;