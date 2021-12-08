import { Component, OnInit, Input } from '@angular/core';
import { Raport } from '../../Raport';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RaportService } from 'src/app/services/raport.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-raport-detail',
  templateUrl: './raport-detail.component.html',
  styleUrls: ['./raport-detail.component.css'],
})
export class RaportDetailComponent implements OnInit {
  @Input() raport?: Raport;
  @Input() raportDetail?: Raport;
  constructor(
    private route: ActivatedRoute,
    private raportService: RaportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRaport();
  }

  getRaport(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.raportService
      .getRaports()
      .subscribe(
        (raports) => (this.raportDetail = raports.find((r) => r.id === id))
      );
  };

  hasRoute(route: string) {
    return this.router.url === route;
  }

  hasRouteDetail(route: string) {
    return this.router.url !== route;
  }

}
