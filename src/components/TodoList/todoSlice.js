import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Learn HTML", completed: false, priority: "Medium"},
        { id: 2, name: "Learn CSS", completed: true, priority: "High"},
        { id: 3, name: "Learn Redux", completed: false, priority: "Low"},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        togleTodoStatus: (state, action) => {
            state.map(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo);
        }
    } 
})