import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Material } from "../../../interfaces/Material.interface";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-add-material",
  templateUrl: "./add-material.component.html",
  styleUrls: ["./add-material.component.css"],
})
export class AddMaterialComponent implements OnInit {
  @Output() onAddMaterial: EventEmitter<Material> = new EventEmitter();
  addMaterialForm: FormGroup = new FormGroup({});
  showAddMaterial: boolean = false;

  alertSucces = false;
  alertFailed = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeFrom();
  }
  initializeFrom(): void {
    this.addMaterialForm = this.fb.group({
      text: ["", Validators.required],
      price: [
        null,
        [
          Validators.pattern("[0-9]+(.[0-9][0-9]?)?"),
          Validators.min(0.01),
          Validators.max(1000000),
          Validators.required,
        ],
      ],
      quantity: [
        null,
        [
          Validators.pattern("[0-9]+(.[0-9][0-9]?)?"),
          Validators.min(0.01),
          Validators.max(1000000),
          Validators.required,
        ],
      ],
    });
  }
  //Using <ngb-alert> instead of HotToastService , with ngIf and boolean values.
  onSubmit() {
    if (!this.addMaterialForm.value.text) {
      this.alertFailed = true;
      setTimeout(() => {
        this.alertFailed = false;
      }, 2000);
      return;
    }
    const newMaterial = {
      text: this.addMaterialForm.value.text,
      price: this.addMaterialForm.value.price,
      quantity: this.addMaterialForm.value.quantity,
    };
    
    //emit the new material using EventEmitter
    // takes the event and use it in the method
    // addMaterialtoFireBase($event)
    // from materials.components.ts

    this.onAddMaterial.emit(newMaterial);

    //Reset the form and the errors
    this.addMaterialForm.reset();
    for (let control in this.addMaterialForm.controls) {
      this.addMaterialForm.controls[control].setErrors(null);
    }
    this.alertSucces = true;
    setTimeout(() => {
      this.alertSucces = false;
    }, 2000);
  }
}
