import { Component } from '@angular/core';
import { ProjectListComponent } from "./project-list/project-list.component";

@Component({
  selector: 'app-root',
  imports: [ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prova-angular';
}
