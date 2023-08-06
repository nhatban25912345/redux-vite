import { createSelector } from "reselect"

export const todoListSelector = (state) => state.todoList
export const searchTextFilterSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status
export const priorityFilterSelector = (state) => state.filters.priority

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextFilterSelector,
    statusFilterSelector,
    priorityFilterSelector,
    (todoList, searchText, status, priority) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return priority.length 
                ? todo.name.includes(searchText) && priority.includes(todo.priority)
                : todo.name.includes(searchText);
            }

            return todo.name.includes(searchText) && 
                    (status === "Completed" ? todo.completed : !todo.completed) && (priority.length ? priority.includes(todo.priority) : true)
            // return priority.length 
            // ? (todo.name.includes(searchText) 
            //     && ( status === "Completed" ? todo.completed : !todo.completed )) 
            //     && priority.includes(todo.priority)
            // : (todo.name.includes(searchText) && (
            //     status === "Completed" ? todo.completed : !todo.completed ))
        })
    }
)