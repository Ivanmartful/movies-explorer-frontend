import React, { useCallback } from "react";
import { validate } from "email-validator";

//хук управления формой и валидации формы
export function useFormWithValidation() {
	const [values, setValues] = React.useState({});
	const [errors, setErrors] = React.useState({});
	const [isValid, setIsValid] = React.useState(false);

	const handleChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		if (name === 'email') {
			if (!validate(value)) {
				target.setCustomValidity('Неверный формат почты')
			} else {
				target.setCustomValidity('')
			}
		}

		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: target.validationMessage });
		setIsValid(target.closest("form").checkValidity());
	};

	const resetForm = useCallback(
		(newValues = {}, newErrors = {}, newIsValid = false) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid]
	);

	return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}