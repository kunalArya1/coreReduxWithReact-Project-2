import React from "react";
import { useSelector } from "react-redux";

const FinanceSummary = () => {
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);
  
  return (
    <div>
      <h1>Your Finance Details</h1>
      <h3>Your Income : ${income}</h3>
      <h3>Your Expenses: ${expenses}</h3>
      <h3>Your Balance : ${income - expenses}</h3>
    </div>
  );
};

export default FinanceSummary;
