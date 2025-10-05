import mongoose from "mongoose";

const checkpointSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
});

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    checkpoints: [checkpointSchema],
    startTime: { type: String },
    endTime: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
