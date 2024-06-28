import mongoose from "mongoose";

const TodoodoSchema = new mongoose.Schema({
    title: { type: String, require: true, default: "Hey" },
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoodoSchema);