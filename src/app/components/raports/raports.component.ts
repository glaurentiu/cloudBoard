import { Component, OnInit, Output, EventEmitter  , Input } from '@angular/core';
import { Raport } from 'src/app/Raport';
import { RaportService } from '../../services/raport.service';
@Component({
  selector: 'app-raports',
  templateUrl: './raports.component.html',
  styleUrls: ['./raports.component.css'],
})
export class RaportsComponent implements OnInit {
  @Input() projectId?: Number ;


  raports: Raport[] = [];

  projects?: string[];
  projectClient: string = '';
  team = '';
  materials?: string[];
  material = '';
  constructor(
    private raportService: RaportService
  ) {}

  ngOnInit(): void {
    this.raportService
      .getRaports()
      .subscribe((raports) => (this.raports = raports));
  }
  addRaport(raport: Raport) {
    this.raportService
      .addRaport(raport)
      .subscribe((raport) => this.raports.push(raport));
  }
}
