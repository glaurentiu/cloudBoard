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
  raportDetail?: Raport[];
  @Input() projectId?: Number;
  
  constructor(
    private route: ActivatedRoute,
    private raportService: RaportService,

  ) {}

  ngOnInit(): void {
    this.getRaport();
    console.log(this.raportDetail)
    
  }

  getRaport(): void {
    this.raportService
      .getRaports()
      .subscribe(
        (raports) => {
          this.raportDetail = raports.filter((r) => r.projectId === this.projectId)
        }
      );
  };

}
