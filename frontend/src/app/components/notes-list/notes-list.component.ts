import { Component, OnInit } from '@angular/core';
import { NoteHttpService } from '../../services/noteHttp.service';
import { NoteModel } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

@Component({
  standalone: true,
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
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
