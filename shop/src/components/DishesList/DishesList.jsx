import React from "react";
import cl from './DishesList.module.css';
import DishItem from "../DishItem/DishItem";

const DishesList = ({items}) => {

    return (
        <div className={cl.list}>
            {items.map(dish => <DishItem key={dish.id} data={dish}/>)}
        </div>
    )
};

export default DishesList;