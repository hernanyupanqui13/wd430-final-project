import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImportsModule } from './modules/imports.module';
import { HeaderComponent } from './components/header/header.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ImportsModule, NotesListComponent],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  title = 'wd430-final-project';
}
