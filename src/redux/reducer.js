import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
  filter: filtersReducer,
  todoList: todoListReducer,
});

// const rootReducer = (state = {}, action) => {
//   return {
//     filter: filtersReducer(state.filter, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

export default rootReducer;
