import { Schema, model } from "mongoose";

export interface NoteDocument {
  title: string;
  description?: string;
}

const noteSchema = new Schema({
  title: {
    type: String,
    required: [true, "Note tiitle is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

const Note = model<NoteDocument>("Note", noteSchema);

export default Note;
