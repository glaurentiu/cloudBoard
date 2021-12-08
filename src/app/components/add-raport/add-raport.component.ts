import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Raport } from "../../Raport";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MaterialService } from "src/app/services/material.service";
import { Material } from "../../Material";

@Component({
  selector: "app-add-raport",
  templateUrl: "./add-raport.component.html",
  styleUrls: ["./add-raport.component.css"],
})
export class AddRaportComponent implements OnInit {
  @Input() projectId?: Number;

  @Output() onAddRaport: EventEmitter<Raport> = new EventEmitter();
  addRaportForm: FormGroup = new FormGroup({});
  materialsParsed: Material[] = [];
  projects?: string[];
  projectClient: string = "";
  team = "";
  materials?: string[];
  material = "";
  materialsFiltered: Material[] = [];

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService
  ) {}

  ngOnInit(): void {
    this.getMaterials();
    this.initializeForm();
    this.materialService.getMaterials().subscribe((materials) => {
      let mat = materials;
      this.materials = mat.map((el) => `${el.text}`);
    });
  }

  initializeForm(): void {
    this.addRaportForm = this.fb.group({
      projectAndClient: "",
      date: "",
      team: "",
      materialsUsed: [],
      description: "",
      materialsQuantity: this.fb.array([this.fb.control('')])
    });
  }

  onSubmit() {
    const newRaport = {
      projectAndClient: this.addRaportForm.value.projectAndClient,
      date: this.addRaportForm.value.date,
      team: this.addRaportForm.value.team,
      materialsUsed: this.addRaportForm.value.materialsUsed,
      description: this.addRaportForm.value.description,
      projectId: this.projectId,
    };
	 console.log(this.addRaportForm.value.materialsQuantity);
	 let newObject = this.materialsFiltered.map((el) => ({
      ...el,
      quantity:
        el.quantity -
        this.addRaportForm.value.materialsQuantity[
          this.materialsFiltered.indexOf(el)
        ],
    }));
	 console.log(newObject);
    
    this.onAddRaport.emit(newRaport);
    this.addRaportForm.reset();
  }
  getMaterials() {
    this.materialService
      .getMaterials()
      .subscribe((materials) => (this.materialsParsed = materials));
  }
  filterMaterials() {
    this.materialsParsed.forEach((material) => {
      if (this.addRaportForm.value.materialsUsed.includes(material.text)) {
        this.materialsFiltered.push(material);
      }
    });
	 

  }
}
