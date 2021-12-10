import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Material } from '../../interfaces/Material.interface';
import {UiService} from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { FormGroup , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css'],
})
export class AddMaterialComponent implements OnInit {
  @Output() onAddMaterial: EventEmitter<Material> = new EventEmitter();
  addMaterialForm: FormGroup = new FormGroup({})
  showAddMaterial: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService , private fb: FormBuilder) {
    this.subscription = this.uiService.onToggle().subscribe((value=> this.showAddMaterial = value))


  }

  ngOnInit(): void {
    this.initializeFrom();
  }
  initializeFrom(): void {
    this.addMaterialForm = this.fb.group({
      text: '',
      price: null,
      quantity: null,
    });
  }

  onSubmit() {
    if(!this.addMaterialForm.value.text) {
      alert("Introduce o denumire ");
      return;
    }
    const newMaterial = {
      text: this.addMaterialForm.value.text,
      price: this.addMaterialForm.value.price,
      quantity: this.addMaterialForm.value.quantity,
      reminder: this.addMaterialForm.value.reminder,
    };
    this.onAddMaterial.emit(newMaterial);
    this.addMaterialForm.reset();
  }
}
