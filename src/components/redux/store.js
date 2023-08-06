// Redux core ----------------------------
// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension"

// const composeEnhancers = composeWithDevTools();

// // const store = createStore(rootReducer, initValue, enhancers)
// export const store = createStore(rootReducer, composeEnhancers)


// Redux toolkit ----------------------------
import { configureStore } from "@reduxjs/toolkit";

import { filtersSlice } from "../Filters/FillterSlice";
import { todoListSlice } from "../TodoList/todoSlice";

export const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    }
})