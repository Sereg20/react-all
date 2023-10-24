import React, {useContext, useState} from "react";
import cl from './DishItem.module.css';
import AddDishBtn from "../UI/AddDishBtn/AddDishBtn";
import DishesContext from "../../context/dishes";

const DishItem = ({data}) => {
    const ctx = useContext(DishesContext);

    const [amount, setAmount] = useState(1);

    const onAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const addItem = () => {
        ctx.addItem({item: data, amount: amount});
        setAmount(1);
    }

    return (
        <>
            <div className={cl.item}>
                <div className={cl.info}>
                    <div className={cl.name}>{data.name}</div>
                    <div className={cl.descr}>{data.description}</div>
                    <div className={cl.price}>{data.price}$</div>
                </div>
                <div className={cl.amount}>
                    <div className={cl['set-amount']}>
                        Amount
                        <input type="number" value={amount} onChange={onAmountChange}/>
                    </div>
                    <AddDishBtn onClick={addItem}/>
                </div>
            </div>
            <hr/>
        </>
    )
};

export default DishItem;