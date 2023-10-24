import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpense, onCancel}) => {

    const [newExpense, setNewExpense] = useState({title: '', amount: '', date: ''});

    function onTitleChange(e) {
        setNewExpense((prevState) => {
            return {...prevState, title: e.target.value};
        });
    }

    function onAmountChange(e) {
        setNewExpense((prevState) => {
            return {...prevState, amount: e.target.value};
        });
    }

    function onDateChange(e) {
        setNewExpense((prevState) => {
            return {...prevState, date: e.target.value};
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        
        onSaveExpense(newExpense);
        setNewExpense({title: '', amount: '', date: ''});
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newExpense.title} onChange={onTitleChange}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={newExpense.amount} onChange={onAmountChange}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01"  max="2022-12-31" value={newExpense.date} onChange={onDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={onCancel}>Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;