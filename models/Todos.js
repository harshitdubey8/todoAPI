import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("todo", todosSchema);
