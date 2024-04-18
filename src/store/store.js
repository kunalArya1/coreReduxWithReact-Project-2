import { createStore } from "redux";
import financeReducer from "./Reducer";

const store = createStore(financeReducer);

export default store;
