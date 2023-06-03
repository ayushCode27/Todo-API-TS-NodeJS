import express from "express";
import "./db";
import noteRouter from "./routers/note.router";

// create server
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/note", noteRouter);

const PORT = 8000;
// listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
