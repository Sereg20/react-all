import React, { useEffect } from "react";
import cl from './Cart.module.css';
import { useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { busyActions } from "../../store/busy-slice";
import { useNavigate } from "react-router-dom";

const ordersURL = "https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Orders.json";


const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = useSelector(state => state.cart.total);
    const {
        loading, 
        error,
        request: getCartCount
    } = useHttp();

    const fetchOrdersConfig = {
        url: ordersURL,
    };

    const setCartTotal = (data) => {
        dispatch(cartActions.setTotal(Object.values(data).length));
    };

    const onCartClick = () => {
        dispatch(busyActions.setBusyState(true));
        navigate('/cart');
    };
    
    useEffect(() => {
        getCartCount(fetchOrdersConfig, setCartTotal);
    }, [getCartCount]);

    return (
        <div className={cl.cart} onClick={onCartClick}>
            <div className={cl.counter}>{total}</div>
        </div>
    );
};

export default Cart;