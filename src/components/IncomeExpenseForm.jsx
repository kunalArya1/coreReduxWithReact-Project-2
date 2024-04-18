import React, { useState } from "react";
import { useDispatch } from "react-redux";

const IncomeExpenseForm = () => {
  const [amount, setamount] = useState(0);
  const dispatch = useDispatch();

  const AddIncome = () => {
    dispatch({
      type: "ADD_INCOME",
      payload: parseInt(amount),
    });
  };

  const AddExpense = () => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: parseInt(amount),
    });
  };
  return (
    <div>
      <input
        style={{ padding: "2px", margin: "5px" }}
        type="number"
        value={amount}
        onChange={(e) => {
          setamount(e.target.value);
        }}
      />

      <button style={{ padding: "2px", margin: "5px" }} onClick={AddIncome}>
        Add Income{" "}
      </button>
      <button style={{ padding: "2px", margin: "5px" }} onClick={AddExpense}>
        Add Expense
      </button>
    </div>
  );
};

export default IncomeExpenseForm;
