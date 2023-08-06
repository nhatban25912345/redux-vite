import { combineReducers } from "redux";

import filtersReducer from "../Filters/FillterSlice";
import todoListReducer from "../TodoList/todoSlice";

// const rootReducer = ( state = {}, action ) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }
console.log(todoListReducer);
const rootReducer = combineReducers(
    {
        filters: filtersReducer,
        todoList: todoListReducer,
    }
)


export default rootReducer;