import { Component } from '@angular/core';
import { NoteAddDialogComponent } from '../note-add-dialog/note-add-dialog.component';
import { SidebarNoteFilterComponent } from '../sidebar-note-filter/sidebar-note-filter.component';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NoteAddDialogComponent, SidebarNoteFilterComponent]
})
export class HeaderComponent {  

}
