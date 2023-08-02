import "./FormInput.css";

function FormInput({ text, type, id, placeholder, value, error}) {
    return (
        <div className="form-input">
            <label className="form-input__label">{text}</label>
            <input
            className="form-input__input"
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            minLength={2}
            maxLength={30}
            value={value}
            />
            <span className="form-input__error">{error}</span>
        </div>
    )
}

export default FormInput;