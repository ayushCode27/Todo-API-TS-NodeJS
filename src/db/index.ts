import mongoose from "mongoose";

mongoose
  .connect("mongodb://0.0.0.0:27017/todo-app")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
