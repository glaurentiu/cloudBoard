import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Material } from 'src/app/interfaces/Material.interface';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.css']
})
export class MaterialItemComponent implements OnInit {

  @Input() material?: Material ;
  @Output() onDeleteMaterial: EventEmitter<Material> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(material:any) {
    this.onDeleteMaterial.emit(material);
  }
}
