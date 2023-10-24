import React, { useContext } from "react";
import cl from './CartList.module.css';
import DishesContext from "../../context/dishes";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
    const ctx = useContext(DishesContext);
    return (
        <div className={cl.list}>
            {!ctx.selectedDishes.length 
                ? <h2>No Selected Dishes</h2>
                : ctx.selectedDishes.map(dish=> <CartItem key={dish.item.id} data={dish.item} count={dish.itemCount}/>)}
        </div>
    )
};

export default CartList;