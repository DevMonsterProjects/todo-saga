import { combineReducers } from "redux";

import todoReducer from "./todoReducer";

const store = {
	todos: todoReducer,
};

export default combineReducers(store);
