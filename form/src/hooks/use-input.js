import { useState } from "react";

const useInput = (validateValue) => {

    const [value, setValue] = useState('');
    const [isValueTouched, setIsValueTouched] = useState(false);

    const isValueValid = validateValue(value);
    const isError = !isValueValid && isValueTouched;

    const inputChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const inputBlurHandler = () => {
        setIsValueTouched(true);
    };

    const reset = () => {
        setValue('');
        setIsValueTouched(false);
    }

    return {
        value,
        isValueValid,
        isError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;