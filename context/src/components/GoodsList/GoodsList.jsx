import React from "react";
import cl from './GoodsList.module.css';
import Good from "../Good/Good";

const GoodsList = ({goods}) => {

    return (
        <div className={cl.list}>
            {goods.map(good => <Good key={good.id} data={good}/>)}
        </div>
    );
};

export default GoodsList;