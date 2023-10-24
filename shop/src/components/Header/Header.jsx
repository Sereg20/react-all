import React, {useState} from "react";
import ReactDOM from "react-dom";
import cl from './Header.module.css';
import Cart from "../Cart/Cart";
import OrderCart from "../Modals/OrderCart/OrderCart";
import DishesContext from "../../context/dishes";

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const onCartClick = () => {
        setModalVisible(true);
    };

    const onModalClose = () => {
        debugger
        setModalVisible(false);
    };

    return (
        <>
            { modalVisible && ReactDOM.createPortal(<OrderCart onClose={onModalClose}/>, document.getElementById('modals')) }
            <header className={cl.header}>
                <div className={cl.title}>
                    ReactMeals
                </div>
                <Cart onClick={onCartClick}>Your Cart</Cart>
            </header>
        </>
    )
};

export default Header;