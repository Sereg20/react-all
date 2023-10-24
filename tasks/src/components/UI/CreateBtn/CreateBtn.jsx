import React from "react";
import cl from './CreateBtn.module.css';

const CreateBtn = ({children, ...props}) => {

    return(
        <button {...props} className={cl.btn}>
            {children}
        </button>
    )
};

export default CreateBtn;