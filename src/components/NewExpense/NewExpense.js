import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    //  Is this a callback function? It looks like one maybe?
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            //  This mostly gets unique id's, except for the rare case of two same random #s.
            id: Math.random.toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    //  This will only show the button OR the ExpenseForm depending on isEditing!
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler} 
        />}
    </div>
};

export default NewExpense;