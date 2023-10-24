import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";

const NewExpense = ({onAddExpense}) => {

    const [isFormActive, setFormActive] = useState(false);

    function saveExpense(expenseData) {
        const newExpense = {
            ...expenseData,
            amount: +expenseData.amount,
            id: Date.now()
        }
        
        onAddExpense(newExpense);
        setFormActive(false);
    }

    function startEditing() {
        setFormActive(true);
    }

    function stopEditing() {
        setFormActive(false);
    }
     

    return (
        <div  className="new-expense">
            {isFormActive
                ? <ExpenseForm onSaveExpense={saveExpense} onCancel={stopEditing}/>
                : <AddNewExpense onClick={startEditing}/>
            }
        </div>
    )
}

export default NewExpense;