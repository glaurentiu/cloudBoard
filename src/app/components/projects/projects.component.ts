import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
  addProject(project: Project) {
    this.projectService
      .addProject(project)
      .subscribe((project) => this.projects.push(project));
  }
}
