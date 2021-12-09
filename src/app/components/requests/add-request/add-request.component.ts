import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Request} from '../../../Request';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  @Output() onAddRequest: EventEmitter<Request> = new EventEmitter();
  
  addRequestForm: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addRequestForm = this.fb.group({
      client:'',
      address: '',
      date: '',
      problem: '',
    });
  }

  onSubmit(){
    if(!this.addRequestForm.value.client) {
      alert('Introduce numele clientului');
      return;
    }
    const newRequest = {
      client: this.addRequestForm.value.client,
      address: this.addRequestForm.value.address,
      date: this.addRequestForm.value.date,
      problem: this.addRequestForm.value.problem,
    };

    this.onAddRequest.emit(newRequest);
    this.addRequestForm.reset();
  }
}
