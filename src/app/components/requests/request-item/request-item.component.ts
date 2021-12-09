import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Request} from '../../../Request';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent implements OnInit {
  faMinusSquare = faMinusSquare;

  @Input() requests?: Request[];
  @Output() onDeleteRequest: EventEmitter<Request> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(request:any) {
    this.onDeleteRequest.emit(request);
  }
}
