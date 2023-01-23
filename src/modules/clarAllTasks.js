import displayTasks from './displayTasks.js';
import { getLocalData, setLocalData } from './storage.js';

const updateIndex = (arr) => {
  let i = 0;
  arr.forEach((task) => {
    task.index = i;
    i += 1;
  });
};

const toggleFinishedTask = (e) => {
  e.nextElementSibling.classList.toggle('line_through');
  const { id } = e.parentElement.parentElement;
  const taskList = getLocalData();
  taskList[id].completed = !taskList[id].completed;
  setLocalData(taskList);
};

const clearSelectedTasks = () => {
  let taskList = getLocalData();
  taskList = taskList.filter((completed) => !completed.completed);
  updateIndex(taskList);
  setLocalData(taskList);
  displayTasks();
  window.location.reload();
};

export { toggleFinishedTask, clearSelectedTasks, updateIndex };
