import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { Material } from '../../interfaces/Material.interface';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {faMinusSquare} from '@fortawesome/free-solid-svg-icons'
import {MaterialF} from '../../interfaces/MaterialF.interface'

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
})
export class MaterialsComponent implements OnInit {
  materialName: string = '';
  materials: Material[] = [];
  showAddMaterial: boolean = false;
  subscription?: Subscription;
  faMinusSquare = faMinusSquare;
  constructor(private materialService: MaterialService,private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddMaterial = value);
  }

  ngOnInit(): void {
    // this.materialService
    //   .getMaterials()
    //   .subscribe((materials) => {
    //     this.materials = materials;
    //     console.log('Materials from json-server',this.materials);

    //   });

    this.materialService.getMaterialsFromFireBase()
    .subscribe((materials)=> {
      this.materials = materials as Material[]
    
      console.log(`Materiale primite din firebase`,this.materials)
    });
  
  
    
  }

  deleteMaterial(material: Material) {
    this.materialService.deleteMaterial(material).subscribe(()=>(this.materials = this.materials.filter(m => m.id !== material.id)))
  }

  addMaterial(material: Material) {
    this.materialService.addMaterial(material).subscribe((material)=>this.materials.push(material))
  }
  addMaterialtoFireBase(material: Material) {
    this.materialService.addMaterialtoFireBase(material)
  }
  deleteMaterialFromFirebBase(material: Material) {
    this.materialService.deleteMaterialFromFirebBase(material)
  }

  toggleAddMaterial() {
    this.uiService.toggleAddMaterial();
  }
}
