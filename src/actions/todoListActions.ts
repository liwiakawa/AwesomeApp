import * as actiontypes from "./types/todoListTypes";
import { ITask} from "../entities/task";

export const setNewTasktodoList = (newTask: ITask) => ({
  type: actiontypes.SET_NEW_TASK,
  newTask,
});

export const deleteTasktodoList = (id) => ({
  type: actiontypes.DEL_TASK,
  id
})

