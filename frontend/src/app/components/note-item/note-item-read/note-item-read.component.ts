import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteModel } from '../../../models/note.model';
import { NoteHttpService } from '../../../services/noteHttp.service';
import { NoteService } from '../../../services/note.service';
import { ImportsModule } from '../../../modules/imports.module';

@Component({
  selector: 'app-note-item-read',
  standalone: true,
  templateUrl: './note-item-read.component.html',
  styleUrl: './note-item-read.component.css',
  imports: [ImportsModule]
})
export class NoteItemReadComponent {
  @Input()
  note!: NoteModel; 
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor(private readonly noteService : NoteService) { }

  onEdit() {
    this.editEvent.emit();
  }

  onDelete() {
    this.noteService.delete(this.note);
  }

  onArchive() {
    this.noteService.archive(this.note);
  }

  onUnarchive(){
    this.noteService.unarchive(this.note);
  }
    
}
