// export const addTodoAction = {
//     type: "todoList/addTodoAction",
//     payload: { id: 3, name: "Learn Redux", complete: false, priority: "Low"},
// }

export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data
    }
}

export const togleTodoStatus = (todoId) => {
    return {
        type: "todoList/togleTodoStatus",
        payload: todoId
    }
}

export const searchFilterChange = (text) => {
    return {
        type: "filters/searchFilterChange",
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: "filters/statusFilterChange",
        payload: status
    }
}

export const priorityFilterChange = (prioritys) => {
    return {
        type: "filters/priorityFilterChange",
        payload: prioritys
    }
}