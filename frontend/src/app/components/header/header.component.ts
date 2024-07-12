import { Component } from '@angular/core';
import { NoteAddDialogComponent } from '../note-add-dialog/note-add-dialog.component';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NoteAddDialogComponent]
})
export class HeaderComponent {  

}
