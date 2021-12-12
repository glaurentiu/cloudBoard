import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Raport } from "../../../interfaces/Raport.interface";
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { MaterialService } from "src/app/services/material.service";
import { Material } from "../../../interfaces/Material.interface";
import {ProjectsService} from '../../../services/projects.service';
import { RequestService } from '../../../services/request.service';
import {Request} from '../../../interfaces/Request.interface';

@Component({
  selector: 'app-add-request-raport',
  templateUrl: './add-request-raport.component.html',
  styleUrls: ['./add-request-raport.component.css']
})
export class AddRequestRaportComponent implements OnInit {
  @Input() requestId?: Number;

  @Output() onAddRaportRequest: EventEmitter<Raport> = new EventEmitter();


  addRaportRequestForm: FormGroup = new FormGroup({});
  materialsParsed: Material[] = [];
  requests?: Request[] ;
  projectClient?: string;
  team = "";
  materials?: string[];
  material = "";
  materialsFiltered: Material[] = [];
  clonedMaterials: Material[] = [];

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private requestService: RequestService
  ) {}

 
  ngOnInit(): void {
    console.log('this requestId', this.requestId)
    this.getMaterials();
    this.getClient();
    this.initializeForm();
    this.materialService.getMaterials().subscribe((materials) => {
      let mat = materials;
      this.materials = mat.map((el) => `${el.text}`);
    });
  }

  initializeForm(): void {
    this.addRaportRequestForm = this.fb.group({
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
      date: this.addRaportRequestForm.value.date,
      team: this.addRaportRequestForm.value.team,
      materialsUsed: this.addRaportRequestForm.value.materialsUsed,
      materialsQuantity: this.materialsFiltered,
      description: this.addRaportRequestForm.value.description,
      requestId: this.requestId,
      bill: false
    };

    this.getAllMaterialsQuantity(this.materialsFiltered);

    this.onAddRaportRequest.emit(newRaport);
    this.addRaportRequestForm.reset();
   
  }

  updateMaterials(material: Material, newMaterial: Material): void {
    this.materialService.updateMaterial(material, newMaterial).subscribe();
  }

  reloadPage() {
    window.location.reload();
 }

  getMaterials() {
    this.materialService
      .getMaterials()
      .subscribe((materials) => (this.materialsParsed = materials));
  }

  getClient() {
    this.requestService.getRequests().subscribe((requests)=> {
      let request = requests.find((r)=> r.id === this.requestId)
     this.projectClient = request?.client
      
      console.log('this.projectClient',this.projectClient)
      console.log('this.requests',request)


    })
  }

  getAllMaterialsQuantity(old: Material[]) {
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
      if (this.addRaportRequestForm.value.materialsUsed.includes(material.text)) {
        this.materialsFiltered.push(material);
      }
    });
  }
}
