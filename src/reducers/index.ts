import { combineReducers } from "redux";

import todoList, { ItodoListReducer } from "./todoListReducer";

export default combineReducers({
  todoList,
});

export interface IState {
  todoList: ItodoListReducer;
}
