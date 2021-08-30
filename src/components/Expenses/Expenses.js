import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    //  Want to start off with just the 2020 items tho :( The results are 1 year behind the chosen year.
    //const [filteredItems, setFilteredItems] = useState(props.items);
    //  Now that filteredExpenses are a variable instead of a useState(), it works! :D
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        //setFilteredItems(props.items.filter(filteredExpense => filteredExpense.date.getFullYear().toString() === filteredYear));
        setFilteredYear(selectedYear);
      };

      const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
        </div>
    );

}

export default Expenses;