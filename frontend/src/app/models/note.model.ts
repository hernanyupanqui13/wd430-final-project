export class NoteModel {
  _id?: number;
  title: string;
  content: string;
  isArchived: boolean;
  dateOfCreation?: Date;
  dateOfModification?: Date;

  constructor(
    title: string,
    content: string,
    dateOfCreation?: Date,
    dateOfModification?: Date,
  ) {
    this.title = title;
    this.content = content;
    this.dateOfCreation = dateOfCreation;
    this.dateOfModification = dateOfModification;
    this.isArchived = false;
  }
  
}
