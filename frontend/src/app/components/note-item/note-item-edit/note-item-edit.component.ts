import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteModel } from '../../../models/note.model';
import { NoteService } from '../../../services/note.service';
import { ImportsModule } from '../../../modules/imports.module';

@Component({
  selector: 'app-note-item-edit',
  standalone: true,
  templateUrl: './note-item-edit.component.html',
  styleUrl: './note-item-edit.component.css',
  imports: [ImportsModule]
})
export class NoteItemEditComponent implements OnInit {
  @Input()
  note!: NoteModel;
  editableNote: NoteModel = this.note;
  @Input() editMode?: string; // create || update
  @Output() finishEdit: EventEmitter<NoteModel> = new EventEmitter<NoteModel>();

  constructor(private readonly noteService: NoteService) { }

  ngOnInit(): void {
    this.editableNote = structuredClone<NoteModel>(this.note);
  }

  onCancel() {
    this.finishEdit.emit(this.note);
    this.editableNote = new NoteModel('', '');

  }

  onSave() {
    if (this.editMode === 'create') {
      this.createNote(this.editableNote);
    } else {
      this.updateNote(this.editableNote);
    }

    this.editableNote = new NoteModel('', '');
  }

  private createNote(note: NoteModel) {

    this.noteService.create(note).then((data) => {
      console.log(data);
      this.finishEdit.emit(data);
    });
    
  }

  private updateNote(note: NoteModel) {
    this.noteService.update(note).then((data) => {
      console.log(data);
      this.finishEdit.emit(data);
    });
  }
}
