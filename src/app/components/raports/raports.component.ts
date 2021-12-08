import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Raport } from 'src/app/Raport';
import { ProjectsService } from '../../services/projects.service';
import { MaterialService } from 'src/app/services/material.service';
import { RaportService } from '../../services/raport.service';
@Component({
  selector: 'app-raports',
  templateUrl: './raports.component.html',
  styleUrls: ['./raports.component.css'],
})
export class RaportsComponent implements OnInit {
  raports: Raport[] = [];

  projects?: string[];
  projectClient: string = '';
  team = '';
  materials?: string[];
  material = '';
  constructor(
    private projectService: ProjectsService,
    private materialService: MaterialService,
    private raportService: RaportService
  ) {}

  ngOnInit(): void {
    this.raportService
      .getRaports()
      .subscribe((raports) => (this.raports = raports));
  }
  addRaport(raport: Raport) {
    this.raportService
      .addRaport(raport)
      .subscribe((raport) => this.raports.push(raport));
  }
}
