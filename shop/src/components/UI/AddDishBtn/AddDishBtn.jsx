import React from "react";
import cl from './AddDishBtn.module.css';

const AddDishBtn = ({...props}) => {

    return (
        <button {...props} className={cl.btn}>
            + Add
        </button>
    )
};

export default AddDishBtn;