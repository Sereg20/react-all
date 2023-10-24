import React, {useContext, useState} from "react";
import ReactDOM from "react-dom";
import cl from './OrderCart.module.css';
import CartList from "../../CartList/CartList";
import ModalBtn from "../../UI/ModalBtn/ModalBtn";
import DishesContext from "../../../context/dishes";
import AdressForm from "../AdressForm/AdressForm";

const OrderCart = ({onClose}) => {

    const [adressVisible, setAdressVisible] = useState(false);
    const ctx = useContext(DishesContext);
    
    const onOrderClick = () => {
        setAdressVisible(true);
    };

    const onCloseAdressForm = (e) => {
        e.stopPropagation();
        setAdressVisible(false);
    };

    return (
        <div className={cl.backgorund} onClick={onClose}>
            { adressVisible && ReactDOM.createPortal(<AdressForm onClose={onCloseAdressForm}/>, document.getElementById('modals')) }
            <div className={cl.modal} onClick={(e) => e.stopPropagation()}>
                <CartList />
                <div className={cl.total}>
                    <div>Total Amount:</div>
                    <div>${ctx.totalPrice.toFixed(2)}</div>
                </div>
                <div className={cl.actions}>
                    <ModalBtn type='transparent' onClick={onClose}>Close</ModalBtn>
                    <ModalBtn type='emphasize' onClick={onOrderClick}>Order</ModalBtn>
                </div>
            </div>
        </div>
    )
};

export default OrderCart;