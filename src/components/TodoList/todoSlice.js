import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        status: "idle",
        todoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        togleTodoStatus: (state, action) => {
            state.todoList.map(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo);
        }
    },
    extraReducers: (builder) => {
        builder
            // eslint-disable-next-line no-unused-vars
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                console.log({action});
                state.status = "idle",
                state.todoList = action.payload;
            })
    }
})

export default todoListSlice;

export const fetchTodos = createAsyncThunk('todoList/fetchTodos', async () => {
    const res = await fetch("/api/todoList");
    const data = await res.json();
    console.log(data);
    return [];
})

// thunk function/ thunk action 
// export function addTodos(todo)  {
//     return function addtodos(dispatch, getState) {
//         console.log('[addTodosThunk]', getState());
//         console.log(todo);
//         //custom
//         todo.name = "Shinha";
//         dispatch(todoListSlice.actions.addTodo);
//     }
// }