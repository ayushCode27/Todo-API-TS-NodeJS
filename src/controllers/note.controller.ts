import { RequestHandler } from "express";
import Note, { NoteDocument } from "../models/note.model";

const create: RequestHandler = async (req, res) => {
  const { title, description } = req.body as NoteDocument;
  // const createdNote = new Note<NoteDocument>({ title, description });
  // await createdNote.save();

  // create and save data on database
  await Note.create<NoteDocument>({ title, description });
  res.json({ message: "Note Created" });
};

const updateNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  const { title, description } = req.body as NoteDocument;
  // const note = await Note.findById(noteId);
  // if (title) note.title = title;
  // if (description) note.description = description;
  // await note.save();
  const note = await Note.findByIdAndUpdate(
    noteId,
    { title, description },
    { new: true }
  );
  if (!note) return res.json({ error: "Note not found" });
  res.json({ note });
};

const deleteNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  const removedNote = await Note.findByIdAndDelete(noteId);
  if (!removedNote) return res.json({ error: "Note not found" });
  res.json({ message: "deleted successfully" });
};

const getSingleById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);
  if (!note) return res.json({ error: "Sorry could not find note" });
  res.json({ note });
};

const getAllNotes: RequestHandler = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};
export { create, updateNote, deleteNote, getSingleById, getAllNotes };
