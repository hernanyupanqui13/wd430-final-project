import { NoteModel } from "./note.model";

export interface UpdateSrvResponse {
  msg: String,
  updatedNote: NoteModel
}