import type { Socket } from "socket.io";
import { getSocketIo } from "../../server.js";
import todoModel from "./todoModel.js";

class Todo {
  private io = getSocketIo();
  constructor() {
    this.io.on("connection", (socket) => {
      console.log("New client is connected");
      socket.on("addToDo", (data) => this.handleAddTodo(socket, data));
    });
  }

  private async handleAddTodo(socket: Socket, data: any) {
    try {
      const { task, deadline, status } = data;

      await todoModel.create({
        task,
        deadline,
        status,
      });

      const todos = await todoModel.find();
      socket.emit("todos_updated", {
        status: "success",
        data: todos,
      });
    } catch (error) {
      socket.emit("todo_response", {
        status: "error",
        error,
      });
    }
  }
}

export default new Todo();
