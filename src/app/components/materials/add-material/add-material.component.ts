import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Material } from '../../../interfaces/Material.interface';
import {UiService} from '../../../services/ui.service';
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
  alertSucces = false;
  alertFailed = false;
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
      this.alertFailed = true;
      setTimeout(() => {this.alertFailed = false},2000)
      return;
    }
    const newMaterial = {
      text: this.addMaterialForm.value.text,
      price: this.addMaterialForm.value.price,
      quantity: this.addMaterialForm.value.quantity,
    };
    this.onAddMaterial.emit(newMaterial);
    this.addMaterialForm.reset();
    this.alertSucces = true;
    setTimeout(() => {this.alertSucces = false},2000)
  }

  close(alert: boolean) {
    alert = false;
  }
}
