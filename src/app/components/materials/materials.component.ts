import { Component, OnInit, Output , EventEmitter } from '@angular/core';"@angular/core";
import { MaterialService } from "src/app/services/material.service";
import { Material } from "../../interfaces/Material.interface";

@Component({
  selector: "app-materials",
  templateUrl: "./materials.component.html",
  styleUrls: ["./materials.component.css"],
})
export class MaterialsComponent implements OnInit {

  materialName: string = "";
  materials: Material[] = [];
  editMode = false;
  editId = '';

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.materialService.getMaterialsFromFireBase().subscribe((materials) => {
      this.materials = materials as Material[];
    });
  }
  addMaterialtoFireBase(material: Material) {
    this.materialService.addMaterialtoFireBase(material);
  }
  deleteMaterialFromFirebBase(material: Material) {
    this.materialService.deleteMaterialFromFirebBase(material);
  }
  editMaterialFromFirebBase(material: Material) {
    console.log('material in functie', material)
    this.materialService.editMaterialFromFirebBase(material);
  }

  enterEditMode(id: string){
    this.editId = id;
    this.editMode = true;

  }

  compareId(id: string,editId: string): boolean {
    return id === editId
  }

  exitEditMode(material: Material) :void {
    this.editMaterialFromFirebBase(material);
    this.editMode = false;
    console.log(material)

  }
}
