import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { ImportsModule } from '../../modules/imports.module';
import { NoteItemComponent } from '../note-item/note-item.component';

@Component({
  standalone: true,
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
  imports: [ImportsModule, NoteItemComponent]
})
export class NotesListComponent implements OnInit {
  notes: NoteModel[] = [];

  constructor(private readonly noteService: NoteService) { }


  ngOnInit(): void {

    this.noteService.notesToShow.subscribe(notes => {
      this.notes = notes.slice();
    });

  }

}
