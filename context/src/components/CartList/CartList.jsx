import React from "react";
import cl from './CartList.module.css';
import CartItem from "../CartItem/CartItem";

const CartList = ({orders}) => {

    return (
        <div className={cl.list}>
            { orders.map(order => <CartItem data={order}/>) }
        </div>
    )
};

export default CartList;