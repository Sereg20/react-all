import React from "react";
import cl from './ModalBtn.module.css';

const ModalBtn = ({children, type, ...props}) => {

    return(
        <button {...props} className={`${cl.btn} ${type ? cl[type] : cl.neutral}`}>
            {children}
        </button>
    );
}

export default ModalBtn;