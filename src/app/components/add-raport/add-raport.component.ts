import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Raport } from '../../Raport';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-add-raport',
  templateUrl: './add-raport.component.html',
  styleUrls: ['./add-raport.component.css'],
})
export class AddRaportComponent implements OnInit {

  @Output() onAddRaport: EventEmitter<Raport> = new EventEmitter();
  addRaportForm: FormGroup = new FormGroup({});

  projects?: string[];
  projectClient: string = '';
  team = '';
  materials?: string[];
  material = '';

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
    private materialService: MaterialService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.projectService.getProjects().subscribe((projects) => {
      let proj = projects;
      this.projects = proj.map((el) => `${el.client} ---  ${el.title}`);
    });
    this.materialService.getMaterials().subscribe((materials) => {
      let mat = materials;
      this.materials = mat.map((el) => `${el.text}`);
    });

  }

  initializeForm(): void {
    this.addRaportForm = this.fb.group({
      projectAndClient: '',
      date: '',
      team: '',
      materialsUsed: [],
      description: '',
    });
  }

  onSubmit() {
    const newRaport = {
      projectAndClient: this.addRaportForm.value.projectAndClient,
      date: this.addRaportForm.value.date,
      team: this.addRaportForm.value.team,
      materialsUsed: this.addRaportForm.value.materialsUsed,
      description: this.addRaportForm.value.description,
    };
    this.onAddRaport.emit(newRaport);
    this.addRaportForm.reset();
  }
}
