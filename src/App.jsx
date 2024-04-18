import React from "react";
import IncomeExpenseForm from "./components/IncomeExpenseForm.jsx";
import FinanceSummary from "./components/FinanceSummary.jsx";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Project 2</h1>
      <IncomeExpenseForm />
      <FinanceSummary />
    </div>
  );
};

export default App;
