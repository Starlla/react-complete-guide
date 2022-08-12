import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItems({ title, amount, date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{`${amount}`}</div>
      </div>
      <button>change title</button>
    </Card>
  );
}

export default ExpenseItems;
