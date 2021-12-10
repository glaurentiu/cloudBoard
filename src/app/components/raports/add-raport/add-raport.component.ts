import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Raport } from "../../../interfaces/Raport.interface";
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { MaterialService } from "src/app/services/material.service";
import { Material } from "../../../interfaces/Material.interface";

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
  clonedMaterials: Material[] = [];

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
    });
  }

  onSubmit() {
    const newRaport = {
      projectAndClient: this.addRaportForm.value.projectAndClient,
      date: this.addRaportForm.value.date,
      team: this.addRaportForm.value.team,
      materialsUsed: this.addRaportForm.value.materialsUsed,
      materialsQuantity: this.materialsFiltered,
      description: this.addRaportForm.value.description,
      projectId: this.projectId,
    };

    this.getAllMaterialsQuantity(this.materialsFiltered);

    this.onAddRaport.emit(newRaport);
    this.addRaportForm.reset();
    this.reloadPage()
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
