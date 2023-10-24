import React from "react";
import cl from'./SetCountBtn.module.css';

const SetCountBtn = ({type, ...props}) => {

    return (
        <button {...props} className={cl.btn}>
            {type === 'incr' ? '+' : '-'}
        </button>
    )
};

export default SetCountBtn;