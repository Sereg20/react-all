import React from "react";
import cl from './LogginInput.module.css';

const LogginInput = ({...props}) => {

    return (
        <input {...props} className={cl.input}/>
    );
};

export default LogginInput;