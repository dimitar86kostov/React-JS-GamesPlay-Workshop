import { useState } from "react";

export default function useForm(initValues, submitCallback) {
    const [values, setValues] = useState(initValues);

    async function submitHandler(e) {
        e.preventDefault();

        submitCallback(values)

        setValues(initValues);
    };

    // Not workink for checkbox
    const changeHandler = (e) => {

        setValues((oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        })))
    };

    return {
        submitHandler,
        changeHandler,
        values
    }
}