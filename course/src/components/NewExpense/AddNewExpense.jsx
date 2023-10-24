import React from "react";
import './AddNewExpense.css';

const AddNewExpense = (props) => {

    return (
        <button {...props} className="add-new-expense-btn">Add New Expense</button>
    )
}

export default AddNewExpense;