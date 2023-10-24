import React, {useContext} from "react";
import cl from './Total.module.css';
import DishesContext from "../../../context/dishes";

const Total = () => {
    const ctx = useContext(DishesContext);
    
    return (
        <div className={cl.total}>
            {ctx.totalAmount}
        </div>
    )
};

export default Total;