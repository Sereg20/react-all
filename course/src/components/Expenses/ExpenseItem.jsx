import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({data}) => { 

    return (
        <li>
            <div className="expense-item">
                <ExpenseDate date={data.date}/>
                <div className="expence-item__descr">
                    <h2>{data.title}</h2>
                    <div className="expence-item__price">${data.amount}</div>
                </div>
            </div>
        </li>    
    )
}

export default ExpenseItem;