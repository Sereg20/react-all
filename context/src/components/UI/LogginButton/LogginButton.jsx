import React from "react";
import cl from './LogginButton.module.css';

const LogginButton = ({children, disabled, ...props}) => {

    const classes = disabled ? `${cl.btn} ${cl.disabled}` : `${cl.btn}`; 

    return (
        <button {...props} className={classes}>{children}</button>
    );
};

export default LogginButton;