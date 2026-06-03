import mongoose, { Schema } from "mongoose";
import { Status, type IToDo } from "./todoType.js";

const todoSchema = new Schema<IToDo>({
  task: String,
  deadline: String,
  status: {
    type: String,
    enum: [Status.Completed, Status.Pending],
    default:Status.Pending
  },

});

export default mongoose.model("ToDo",todoSchema);
