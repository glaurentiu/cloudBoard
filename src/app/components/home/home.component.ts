import { Component, OnInit } from '@angular/core';
import {Request} from '../../Request';
import {RequestService} from '../../services/request.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  requests: Request[] =[];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getRequests().subscribe((requests)=> (this.requests = requests))
  }

}
