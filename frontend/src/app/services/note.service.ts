import { Injectable } from '@angular/core';
import { NoteHttpService } from './noteHttp.service';
import { NoteModel } from '../models/note.model';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../models/filter.interface';
@Injectable({
  providedIn: 'root',
})
export class NoteService {
  public readonly notesSubject = new BehaviorSubject<NoteModel[]>([]);
  public readonly notesToShow = new BehaviorSubject<NoteModel[]>([]);
  private readonly filters: Filter = {
    archived: false
  }

  constructor(private readonly noteHttpService: NoteHttpService) {
    this.getAll();

    this.notesSubject.subscribe(() => {
      this.applyFilters();
    });
  }

  public getAll(): void {
    this.noteHttpService.getAll().subscribe((notes) => {
      this.notesSubject.next(notes);
    });
  }

  public delete(note: NoteModel): Promise<void> {
    // This resolves or rejects the promise when all the delete process finished
    return new Promise<void>((resolve, reject) => {
      const notesList = this.notesSubject.getValue();
      const index = notesList.findIndex((n) => n._id === note._id);

      if (index !== -1) {
        this.noteHttpService.delete(note._id!).subscribe({
          next: () => {
            console.log('Note deleted');
            notesList.splice(index, 1);
            this.notesSubject.next(notesList.slice());
            resolve();
          },
          error: (error) => {
            console.error('Error deleting note:', error);
            reject(error);
          },
        });
      } else {
        reject(new Error(`Note with id ${note._id} not found`));
      }
    });
  }

  public create(note: NoteModel): Promise<NoteModel> {
    return new Promise<NoteModel>((resolve, reject) => {
      this.noteHttpService.create(note).subscribe({
        next: (createdNote) => {
          const notesList = this.notesSubject.getValue();
          notesList.unshift(createdNote); //Adding at the begining of the array
          const notesListClone = notesList.slice();
          this.notesSubject.next(notesListClone);
          resolve(createdNote);
        },
        error: (error) => {
          console.error('Error creating note:', error);
          reject(error);
        },
      });
    });
  }

  public update(note: NoteModel): Promise<NoteModel> {
    return new Promise<NoteModel>((resolve, reject) => {
      this.noteHttpService.update(note).subscribe({
        next: (srvResponse) => {
          const notesList = this.notesSubject.getValue();
          const index = notesList.findIndex((n) => n._id === srvResponse.updatedNote._id);
          if (index !== -1) {
            notesList[index] = structuredClone(srvResponse.updatedNote);
            const notesListClone = notesList.slice();
            this.notesSubject.next(notesListClone);
            resolve(srvResponse.updatedNote);
          } else {
            reject(new Error(`Note with id ${note._id} not found`));
          }
        },
      });
    });
  }


  setArchivedFilter(archived: boolean) {
    this.filters.archived = archived;
    this.applyFilters();
  }

  private applyFilters() {
    const filteredNotes = this.notesSubject.getValue().filter(note => {
      if (note.isArchived !== this.filters.archived) {
        return false;
      }
      
      return true;
    });
    console.log('Filtered notes:', filteredNotes);
    this.notesToShow.next(filteredNotes);
  }

  archive(note : NoteModel) {
    note.isArchived = true;
    this.update(note);
  }

  unarchive(note : NoteModel) {
    note.isArchived = false;
    this.update(note);
  }


}
