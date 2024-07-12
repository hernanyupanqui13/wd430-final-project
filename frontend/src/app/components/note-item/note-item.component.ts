import { Component, Input } from '@angular/core';
import { NoteModel } from '../../models/note.model';

@Component({
  standalone: true,
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.css'
})
export class NoteItemComponent {
  edit: boolean = false;
  @Input()
  note!: NoteModel;
  noteUnderEdition : NoteModel = this.note;


  onFinishEdit(updatedNote : NoteModel): void {
    //this.note = updatedNote;
    this.edit = false;
  }

  onEdit(): void {
    this.edit = true;
  }
  
}
