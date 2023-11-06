export const addTodos = (data) => {
  return {
    type: "todoList/addTodos",
    payload: data,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};

export const prioriryFilterChange = (priorities) => {
  return {
    type: "filters/prioriryFilterChange",
    payload: priorities,
  };
};
