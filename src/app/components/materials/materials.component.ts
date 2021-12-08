import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { Material } from '../../Material';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {faMinusSquare} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
})
export class MaterialsComponent implements OnInit {
  materials: Material[] = [];
  showAddMaterial: boolean = false;
  subscription?: Subscription;
  faMinusSquare = faMinusSquare;
  constructor(private materialService: MaterialService,private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddMaterial = value);
  }

  ngOnInit(): void {
    this.materialService
      .getMaterials()
      .subscribe((materials) => (this.materials = materials));
  }

  deleteMaterial(material: Material) {
    this.materialService.deleteMaterial(material).subscribe(()=>(this.materials = this.materials.filter(m => m.id !== material.id)))
  }

  addMaterial(material: Material) {
    this.materialService.addMaterial(material).subscribe((material)=>this.materials.push(material))
  }

  toggleAddMaterial() {
    this.uiService.toggleAddMaterial();
  }
}
