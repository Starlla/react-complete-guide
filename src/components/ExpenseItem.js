import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItems({ title, amount, date }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{`${amount}`}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
