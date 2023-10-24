import React, {useState} from "react";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({data}) => {

    const [filterValue, setFilterValue] = useState('2021');
    const filteredExpenses = filterValue ? data.filter(expense => expense.date.getFullYear() == filterValue) : data;

    function onFilterChange(e) {
        const filterValue = e.target.value;
        setFilterValue(filterValue);
    }    

    return (
        <div className="expenses-section">
            <ExpensesFilter value={filterValue} setValue={onFilterChange}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses;