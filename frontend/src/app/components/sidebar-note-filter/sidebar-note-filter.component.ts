import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ImportsModule } from '../../modules/imports.module';

@Component({
  standalone: true,
  selector: 'app-sidebar-note-filter',
  templateUrl: './sidebar-note-filter.component.html',
  styleUrl: './sidebar-note-filter.component.css',
  imports: [ImportsModule]
})
export class SidebarNoteFilterComponent {
  sidebarVisible: boolean = false;

  constructor(private readonly noteService: NoteService) { }

  onFilterNotes() {
    console.log("Filter notes...");
    this.noteService.setArchivedFilter(false);
  }

  onFilterArchived() {
    console.log("Filter archived...");
    this.noteService.setArchivedFilter(true);
  }
}
