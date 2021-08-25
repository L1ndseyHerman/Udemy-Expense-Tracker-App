import "./Card.css";

function Card(props) {

    //  This gets the other classes inside the <Card></Card>, aka the ones in ExpenseItem.
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;