import React, { useState, useEffect } from 'react';
import GoodsList from "../components/GoodsList/GoodsList";
import Cart from "../components/Cart/Cart";
import useHttp from '../hooks/use-http';
import { useDispatch } from 'react-redux';
import { busyActions } from '../store/busy-slice';

const goodsURL = "https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Goods.json";

const HomePage = () => {
    const [goods, setGoods] = useState([]);
    const dispatch = useDispatch();
    
    const handleGoodsResponse = (data) => {
        const goods = data.map((item, index) => {
            return {
                id: index,
                ...item
            }
        });

        setGoods(goods);
    };

    const {
        loading, 
        error,
        request: fetchGoods
    } = useHttp();

    const fetchGoodsConfig = {
        url: goodsURL
    };

    useEffect(() => {
        fetchGoods(fetchGoodsConfig, handleGoodsResponse);
    }, [fetchGoods]);

    dispatch(busyActions.setBusyState(loading));

    return (
        <div className='body'>
            <div className='goods-list'>
                { error && <p className='error-msg msg'>Something went wrong</p> }
                { !loading && !error && <GoodsList goods={goods}/> }
            </div>
            <Cart />
        </div>
    );
};

export default HomePage;