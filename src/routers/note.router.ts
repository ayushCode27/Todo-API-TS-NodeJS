import { Router } from "express";
import * as notesController from "../controllers/note.controller";

const router = Router();

router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getSingleById);
router.post("/create", notesController.create);
router.patch("/:noteId", notesController.updateNote);
router.delete("/:noteId", notesController.deleteNote);

export default router;
