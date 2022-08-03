import React from "react";
import "./ExpenseItem.css";

function ExpenseItems({ title, amount, date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { year: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
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
