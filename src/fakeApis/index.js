import { Model, createServer } from "miragejs";

export const setupServer = () => {
    let server = createServer({
        models: {
            todoList: Model    
        }
    });

    server.get("/api/todoList", (schema) => {
        return schema.todoList.all();
    });

    server.post("/api/todoList", (schema, request) => {
        const payload = JSON.parse(request.requestBody);

        return schema.todoList.create(payload);
    })

    server.post("/api/updateTodoList", (schema, request) => {
        const payload = JSON.parse(request.requestBody);

        const currentTodo = schema.todoList.find(payload.id);
        currentTodo.update(payload)
    })

}