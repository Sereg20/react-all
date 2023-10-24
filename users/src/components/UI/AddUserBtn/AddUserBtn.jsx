import React from "react";
import cl from './AddUserBtn.module.css';

const AddUserBtn = ({children, ...props}) => {

    return (
        <button {...props} className={cl.btn}>
            {children}
        </button>
    );
}

export default AddUserBtn;