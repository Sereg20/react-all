import React, { useState, useContext } from "react";
import cl from './Good.module.css';
import AuthContext from "../../store/auth-context";
import useHttp from "../../hooks/use-http";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ordersURL = "https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Orders.json";

const Good = ({data}) => {
    const dispatch = useDispatch();
    const [itemClass, setItemClass] = useState('non-active');
    const ctx = useContext(AuthContext);
    const isLoggedIn = ctx.isLoggedIn;

    const {
        loading, 
        error,
        request: createOrder
    } = useHttp();

    const fetchGoodsConfig = {
        url: ordersURL,
        method: 'POST'
    };

    const onOrderClick = () => {
        fetchGoodsConfig.body = data;
        createOrder(fetchGoodsConfig, applyData);
    };

    const applyData = () => { 
        dispatch(cartActions.increaseTotal());
    };

    const itemClasses = itemClass === 'active' ? `${cl.item} ${cl.active}` : `${cl.item}`;
    const descClasses = itemClass === 'active' ? `${cl.desc} ${cl['desc-active']}` : `${cl.desc}`;

    return (
            <div 
                className={itemClasses} 
                onMouseEnter={() => setItemClass('active')}
                onMouseLeave={() => setItemClass('non-active')}>
                <div className={descClasses}>
                    {data.desc}
                    { isLoggedIn && <div className={cl.cart} onClick={onOrderClick}>
                        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="Add to Cart"/>
                    </div> }
                </div>
                <div>
                    <img src={data.img} className={cl.img}/>
                </div>
                <div className={cl.info}>
                    <div>{data.name}</div>
                    <div className={cl.price}>${data.price}</div>
                </div>
            </div>
    );
};

export default Good;