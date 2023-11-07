// const initState = [
//   { id: 1, name: "Learn Yoga", completed: true, priority: "Medium" },
//   { id: 2, name: "Learn React", completed: false, priority: "High" },
//   { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
// ];

import { createSlice } from "@reduxjs/toolkit";

// const todoListReducer = (state = initState, action) => {
//   //console.log(state, action);
//   switch (action.type) {
//     case "todoList/addTodos":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: true, priority: "Medium" },
    { id: 2, name: "Learn React", completed: false, priority: "High" },
    { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
  ],

  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
    },
    //action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload); // [{abc: ''}]
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
