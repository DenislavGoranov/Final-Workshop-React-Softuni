import { useState } from "react";

export default function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = (event) => {
        event.preventDefault();

        submitCallback(values);
    }

    return {
        values,
        onChange,
        submitHandler,
    };
}