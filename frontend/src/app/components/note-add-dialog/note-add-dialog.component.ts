import { Component } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { ImportsModule } from '../../modules/imports.module';
import { NoteItemEditComponent } from '../note-item/note-item-edit/note-item-edit.component';

@Component({
  selector: 'app-note-add-dialog',
  standalone: true,
  templateUrl: './note-add-dialog.component.html',
  styleUrl: './note-add-dialog.component.css',
  imports: [ImportsModule, NoteItemEditComponent],
})
export class NoteAddDialogComponent {
  public visible: boolean = false;
  public note: NoteModel = new NoteModel("", "");

  public showDialog(): void {
    this.visible = true;
  }

  onFinishEdit() {
    this.visible = false;
  }
}
