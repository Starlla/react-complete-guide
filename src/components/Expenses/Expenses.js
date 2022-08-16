import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const selectChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onSelectChange={selectChangeHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.title}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
