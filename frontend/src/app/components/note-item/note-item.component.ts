import { Component, Input } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { NoteItemReadComponent } from './note-item-read/note-item-read.component';
import { NoteItemEditComponent } from './note-item-edit/note-item-edit.component';

@Component({
  standalone: true,
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.css',
  imports: [NoteItemReadComponent, NoteItemEditComponent]
})
export class NoteItemComponent {
  edit: boolean = false;
  @Input()
  note!: NoteModel;
  noteUnderEdition : NoteModel = this.note;


  onFinishEdit(updatedNote : NoteModel): void {
    this.note = updatedNote;
    this.edit = false;
  }

  onEdit(): void {
    this.edit = true;
  }
  
}
