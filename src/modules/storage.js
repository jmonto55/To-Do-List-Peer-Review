const getLocalData = () => JSON.parse(localStorage.getItem('toDoList')) || [];

const setLocalData = (str) => {
  localStorage.setItem('toDoList', JSON.stringify(str));
};

export { getLocalData, setLocalData };