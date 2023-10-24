import React, {useContext} from "react";
import cl from'./CartItem.module.css';
import CartItemCount from "../UI/CartItemCount/CartItemCount";
import SetCountBtn from "../UI/SetCountBtn/SetCountBtn";
import DishesContext from "../../context/dishes";

const CartItem = ({data, count}) => {
    const ctx = useContext(DishesContext);

    const onRemoveClick = () => {
        ctx.removeItem({item: data});
    };

    const onAddClick = () => {
        ctx.addItem({amount: 1, item: data});
    };


    return (
        <div className={cl.item}>
            <div className={cl.info}>
                <div className={cl.main}>
                    <div className={cl.main__name}>{data.name}</div>
                    <div className={cl.main__price}>${data.price}</div>
                </div>
                <div>
                    <CartItemCount value={count}/>
                </div>
            </div>
            <div className={cl.acitons}>
                <SetCountBtn type='decr' onClick={onRemoveClick}/>
                <SetCountBtn type='incr' onClick={onAddClick}/>
            </div>
        </div>
    )
};

export default CartItem;