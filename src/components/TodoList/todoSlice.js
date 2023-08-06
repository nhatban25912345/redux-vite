const initTodoList = [
        { id: 1, name: "Learn HTML", completed: false, priority: "Medium"},
        { id: 2, name: "Learn CSS", completed: true, priority: "High"},
        { id: 3, name: "Learn Redux", completed: false, priority: "Low"},
    ]
const todoListReducer = ( state = initTodoList, action ) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [
                ...state,
                action.payload
            ]
        case "todoList/togleTodoStatus":
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)

        default:
            return [
                ...state
            ]
    }
}

export default todoListReducer;