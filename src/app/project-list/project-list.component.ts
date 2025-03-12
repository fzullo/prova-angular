import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Progetti } from '../models/progetti';
import { ProjectService } from '../servicies/project.service';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit{ 
  
  listaProgetti: Progetti[] = []
  constructor(private servizio: ProjectService) {}

  ngOnInit(): void {
    this.servizio.getProjects().subscribe((servizio) => {
      this.listaProgetti = servizio
      console.log(this.listaProgetti)
    });
  }
}
