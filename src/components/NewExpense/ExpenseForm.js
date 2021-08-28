import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    //  Says states always get a string? Even if not coming from a textbox? I'm confused :(
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });*/

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //  This gets the old values from userInput, then overrides enteredTitle
        //  with the new data, while keeping enteredAmount and enteredDate the same.
        /*setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })*/

        //  prevState is a React keyword for getting the previous state.
        //  This is guaranteed to work, unlike the above code, which occasionally 
        //  doesn't bec the way useState() uses threads.
        /*setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });*/
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /*setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })*/
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /*setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })*/
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            //  Is this missing a try/catch? Oh wait, the datePicker only allows dates, so good to go!
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        //  Because this is bound to the "value" property of the input, this will clear the input!
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type="text" 
                    value={enteredTitle} 
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount} 
                    onChange={amountChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date" 
                    min="2019-01-01" 
                    max="2022-12-31" 
                    value={enteredDate} 
                    onChange={dateChangeHandler} 
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;