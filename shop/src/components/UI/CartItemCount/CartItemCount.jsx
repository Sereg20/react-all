import React from "react";
import cl from'./CartItemCount.module.css';

const CartItemCount = ({value}) => {

    return (
        <div className={cl.tocken}>
            x{value}
        </div>
    )
};

export default CartItemCount;