import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';
import { Raport } from "../../../interfaces/Raport.interface";
import { RaportService } from "src/app/services/raport.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'CloudBoard';
  showAddMaterial: boolean = false;
  subscription?: Subscription;
  raportDetail: Raport[] = []

  constructor(private uiService: UiService,   private raportService: RaportService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddMaterial = value);
  }

  ngOnInit(): void {
    this.getRaport();

  }

  toggleAddMaterial() {
    this.uiService.toggleAddMaterial();
  }
  getRaport(): void {
    this.raportService.getRaports().subscribe((raports) => {
      this.raportDetail = raports.filter((raport)=> raport.bill === false)
    });
  }


}
