import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filter.search);
//   });

//   return todosRemaining;
// };
export const filterStatusSelector = (state) => state.filter.status;
export const searchTextSelector = (state) => state.filter.search;
export const filterPrioritiesSelector = (state) => state.filter.priority;

export const todosRemainingselector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
