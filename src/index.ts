import express from "express";
import "./db";
import * as notesController from "./controllers/note.controllers";

// create server
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", notesController.getAllNotes);
app.get("/:id", notesController.getSingleById);
app.post("/create", notesController.create);
app.patch("/:noteId", notesController.updateNote);
app.delete("/:noteId", notesController.deleteNote);

const PORT = 8000;
// listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
