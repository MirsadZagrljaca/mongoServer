import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  name: String,
  ects: Number
});

export default mongoose.model("Course", CourseSchema);
