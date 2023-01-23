import displayTasks from './displayTasks.js';
import { getLocalData, setLocalData } from './storage.js';

export class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const addTaskToList = () => {
  const addTask = document.querySelector('.add_to_list');
  const taskList = getLocalData();
  const index = taskList ? taskList.length : 0;
  const newTask = new Task(addTask.value, index);

  taskList.push(newTask);
  setLocalData(taskList);
  displayTasks();
  window.location.reload();
};

export default addTaskToList;