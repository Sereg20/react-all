import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({items}) => {

    if (!items.length) {
        return <h2 className="expenses-list__fallback">Not Found!</h2>
    }

    return (
        <ul className="expenses-list">
            { items.map(item => <ExpenseItem key={item.id} data={item}/>) }
        </ul>
    )
}

export default ExpensesList;