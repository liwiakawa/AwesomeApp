import * as actionTypes from "../actions/types/todoListTypes";
import { ITask } from "../entities/task";

export interface ItodoListReducer {
  todoList: ITask[];
}

const defaultState = (): ItodoListReducer => ({
  todoList: [],
});

export default (state = defaultState(), action: any): ItodoListReducer => {
  switch (action.type) {
    case actionTypes.SET_NEW_TASK: {
      return {
        ...state,
        todoList: [...state.todoList, action.newTask],
      };
    }
    default: {
      return state;
    }
  }
};
