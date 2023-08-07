import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setupServer } from "../../fakeApis/index";

setupServer();

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
                state.status = 'loading';
              })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                console.log({ action });
                state.todoList = action.payload;
                state.status = 'idle';
            })

            // eslint-disable-next-line no-unused-vars
            .addCase(addNewTodo.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                console.log({ action });
                console.log(state.todoList);
                state.todoList.push(action.payload);
                state.status = 'idle';
            })

            // eslint-disable-next-line no-unused-vars
            .addCase(updateTodo.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                console.log({ action });
                state.status = 'idle';
                state.todoList.map((todo) => {
                    if (todo.id === action.payload.id) {
                      todo.completed = !todo.completed;
                    }
                })
            })
    }
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    console.log(data);
    return data.todos;
});

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async (newTodo) => {
    const res = await fetch('/api/todos', {
        method: "POST",
        body: JSON.stringify(newTodo),
    })
    const data = await res.json();
    console.log(data.todos);
    return data.todos;
})

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todoUpdated) => {
    const res = await fetch("/api/updateTodo", {
        method: "POST",
        body: JSON.stringify(todoUpdated)
    });
    const data = await res.json();
    return data.todos;
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

export default todoListSlice;