import displayTasks from './displayTasks.js';
import { getLocalData, setLocalData } from './storage.js';

const taskList = getLocalData();

const editSelectedTask = (id, val) => {
  taskList[id].description = val;
  setLocalData(taskList);
  displayTasks();
  window.location.reload();
};

export default editSelectedTask;
