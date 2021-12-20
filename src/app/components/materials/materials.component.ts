import { Component, OnInit } from "@angular/core";
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
}
