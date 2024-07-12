export class NoteModel {
  id?: number;
  title: string;
  content: string;
  isArchived: boolean;
  dateOfCreation?: Date;
  dateOfModification?: Date;
  dateOfDeletion?: Date;

  constructor(
    title: string,
    content: string,
    dateOfCreation?: Date,
    dateOfModification?: Date,
    dateOfDeletion?: Date
  ) {
    this.title = title;
    this.content = content;
    this.dateOfCreation = dateOfCreation;
    this.dateOfModification = dateOfModification;
    this.dateOfDeletion = dateOfDeletion;
    this.isArchived = false;
  }
  
}
