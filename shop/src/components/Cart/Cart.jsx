import React from "react";
import cl from './Cart.module.css';
import Total from "../UI/Total/Total";
import CartIcon from "../icons/CartIcon";

const Cart = ({children, ...props}) => {
    
    return (
        <button {...props} className={cl.cart}>
            <CartIcon />
            {children}
            <Total/>
        </button>
    )
};

export default Cart;