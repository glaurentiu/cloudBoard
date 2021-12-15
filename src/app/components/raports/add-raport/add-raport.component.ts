import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Raport } from "../../../interfaces/Raport.interface";
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { MaterialService } from "src/app/services/material.service";
import { Material } from "../../../interfaces/Material.interface";
import {ProjectsService} from '../../../services/projects.service';
import { Project } from '../../../interfaces/Project.interface';

@Component({
  selector: "app-add-raport",
  templateUrl: "./add-raport.component.html",
  styleUrls: ["./add-raport.component.css"],
})
export class AddRaportComponent implements OnInit {
  @Input() projectId?: string;

  @Output() onAddRaport: EventEmitter<Raport> = new EventEmitter();

  addRaportForm: FormGroup = new FormGroup({});
  materialsParsed: Material[] = [];
  projects?: Project[] ;
  projectClient: string = "";
  team = "";
  materials?: string[];
  material = "";
  materialsFiltered: Material[] = [];
  clonedMaterials: Material[] = [];

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.getMaterials();
    this.getProjectAndClient();
    this.initializeForm();
    this.materialService.getMaterialsFromFireBase().subscribe((materials) => {
      let mat = materials;
      this.materials = mat.map((el) => `${el['text']}`);
    });
  }

  initializeForm(): void {
    this.addRaportForm = this.fb.group({
      projectAndClient: "",
      date: "",
      team: "",
      materialsUsed: [],
      description: "",
    });
  }

  onSubmit() {
    const newRaport = {
      projectAndClient: this.projectClient,
      date: this.addRaportForm.value.date,
      team: this.addRaportForm.value.team,
      materialsUsed: this.addRaportForm.value.materialsUsed,
      materialsQuantity: this.materialsFiltered,
      description: this.addRaportForm.value.description,
      projectId: this.projectId,
      bill: false
    };

    this.getAllMaterialsQuantity(this.materialsFiltered);

    this.onAddRaport.emit(newRaport);
    this.addRaportForm.reset();

  }

  updateMaterials(material: Material, newMaterial: Material): void {
    this.materialService.updateMaterialFromFirebase(material,newMaterial)
  }

  reloadPage() {
    window.location.reload();
 }

  getMaterials() {
    this.materialService
      .getMaterialsFromFireBase()
      .subscribe((materials) => (this.materialsParsed = materials as Material[]));
  }

  getProjectAndClient() {
    this.projectsService.getProjects().subscribe((projects)=> {
    
      this.projects = projects.filter((project) =>{ project['id'] === this.projectId}) as Project[]
      this.projectClient = `${projects[0]['client']} : ${projects[0]['title']}`


    })
  }

  getAllMaterialsQuantity(old: Material[]) {
    console.log(this.clonedMaterials);
    console.log(this.materialsFiltered);
    for (let i = 0; i < old.length; i++) {
      
      for (let j = 0; j < this.clonedMaterials.length; j++) {
       
        if (this.materialsFiltered[i].id === this.clonedMaterials[j].id) {
          this.updateMaterials(
            this.clonedMaterials[j],
            this.materialsFiltered[i]
          );
        }
      }
    }
  }

  filterMaterials() {
    this.clonedMaterials = this.materialsParsed.map((obj) => {
      return { ...obj };
    });
    this.materialsParsed.forEach((material) => {
      if (this.addRaportForm.value.materialsUsed.includes(material.text)) {
        this.materialsFiltered.push(material);
      }
    });
  }
}
