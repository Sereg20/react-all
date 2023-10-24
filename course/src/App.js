import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {id: 1, title: 'Car insurance', amount: 250, date: new Date(2021, 5, 11)},
  {id: 2, title: 'Paper for printer', amount: 345, date: new Date(2022, 2, 21)},
  {id: 3, title: 'Purchase Order', amount: 30, date: new Date(2020, 1, 18)},
  {id: 4, title: 'New Desk (Wooden)', amount: 1235, date: new Date(2021, 12, 11)},
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpensed(expense) {
    const newExpense = {
      ...expense,
      date: new Date(expense.date)
    };
    setExpenses(prevState => {
      return [newExpense, ...prevState];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensed}/>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
