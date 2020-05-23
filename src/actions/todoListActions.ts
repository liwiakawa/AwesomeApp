import * as actiontypes from "./types/todoListTypes";
import { ITask} from "../entities/task";

export const setNewTasktodoList = (newTask: ITask) => ({
  type: actiontypes.SET_NEW_TASK,
  newTask,
});

