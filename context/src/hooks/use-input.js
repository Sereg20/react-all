import { useState } from "react";

const useInputForm = (validateValue) => {
    const [value, setValue] = useState('');
    const isValueValid = validateValue(value);

    const inputChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        isValueValid,
        inputChange
    };

};

export default useInputForm;