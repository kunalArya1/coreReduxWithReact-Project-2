import { act } from "react-dom/test-utils";

let defaultState = {
  income: 0,
  expenses: 0,
};
const financeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        income: state.income + action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: state.expenses + action.payload,
      };
    default:
      return state;
  }
};
export default financeReducer;
