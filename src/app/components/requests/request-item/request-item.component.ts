import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Request} from '../../../interfaces/Request.interface';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {RequestService} from '../../../services/request.service'
import { RaportService } from 'src/app/services/raport.service';
import {Raport} from '../../../interfaces/Raport.interface'
@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent implements OnInit {
  faMinusSquare = faMinusSquare;

  requestItem?: Request;
  raports: Raport[] = [];

  @Input() requests?: Request[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private requestService: RequestService,
    private raportService: RaportService,
  ) { }

  ngOnInit(): void {
    this.getRequest();
    this.raportService
    .getRaports()
    .subscribe((raports) => (this.raports = raports as Raport[]));
  }

 deleteRequest(request: Request) {
  this.requestService.deleteRequest(request)
  setTimeout(this.reloadPage,1000)
 }
 reloadPage() {
  window.location.reload();
}

  getRequest():void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.requestService.getRequests().subscribe(
      (requests) =>(this.requestItem = requests.find((p) => p['id'] === id) as Request)
    );
  }
  addRaport(raport: Raport) {
    this.raportService
      .addRaport(raport)
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
  hasRouteDetail(route: string) {
    return this.router.url !== route;
  }




}
