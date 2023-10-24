import React from "react";
import cl from'./ModalBtn.module.css';

const ModalBtn = ({children, type, ...props}) => {

    return (
        <button {...props} className={`${cl.btn} ${cl[type]}`}>
            {children}
        </button>
    )
};

export default ModalBtn;