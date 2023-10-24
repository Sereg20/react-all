import React from "react";
import cl from './CartItem.module.css';

const CartItem = ({data}) => {

    return (
        <div className={cl.item}>
            <div>
                <img src={data.img} className={cl.img}/>
            </div>
            <div className={cl.info}>
                <div>{data.name}</div>
                <div>{data.desc}</div>
            </div>
            <div className={cl.price}>${data.price}</div>
        </div>
    );
};

export default CartItem;