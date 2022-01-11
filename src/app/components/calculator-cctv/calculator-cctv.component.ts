import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface cctv {
  type: string;
  nr: number;
}
export interface res {
  recorder: string;
  nrMufAl: number;
  nrVideoBalun: string;
  amp: string;
  cable: string;
  hdd: string;
}

@Component({
  selector: "app-calculator-cctv",
  templateUrl: "./calculator-cctv.component.html",
  styleUrls: ["./calculator-cctv.component.css"],
})
export class CalculatorCctvComponent implements OnInit {
  nrOfCameras: Array<number> = [];
  dataResult?: cctv;
  result = ``;
  res: res = {
    recorder: "",
    nrMufAl: 0,
    nrVideoBalun: "",
    amp: "",
    cable: "",
    hdd: "",
  };

  cctvForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.nrOfCameras = this.generateCamNr(32);
    this.initializeForm();
  }

  initializeForm(): void {
    this.cctvForm = this.fb.group({
      type: "",
      nr: "",
    });
  }

  onSubmit() {
    const data = {
      type: this.cctvForm.value.type,
      nr: this.cctvForm.value.nr,
    };
    this.dataResult = data;
    this.calculate(data.type, data.nr);
  }

  generateCamNr(nr: number): Array<number> {
    let result = [];

    for (let i = 1; i <= nr; i++) {
      result.push(i);
    }

    return result;
  }

  calculate(type: string, nr: number) {
    if (type === "IP") {
      if (nr < 5) {
        this.res.recorder = "NVR cu 4 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} X mufe RJ45`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `Sursa de alimentare 12v 5amp`;
        this.res.hdd = `HDD 1TB`;
      } else if (nr < 9) {
        this.res.recorder = "NVR cu 8 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} X mufe RJ45`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `Sursa de alimentare 12v 10amp`;
        this.res.hdd = `HDD 2TB`;
      } else if (nr < 17) {
        this.res.recorder = "NVR cu 16 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} X mufe RJ45`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `Sursa de alimentare 12v 15amp`;
        this.res.hdd = `HDD 4TB`;
      } else if (nr < 33) {
        this.res.recorder = "NVR cu 32 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} X mufe RJ45`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `2 x Sursa de alimentare 12v 15amp`;
        this.res.hdd = `HDD 6TB`;
      }
    } else if (type === "ANALOGIC") {
      if (nr < 5) {
        this.res.recorder = "DVR cu 4 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} X mufe video-balun`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `Sursa de alimentare 12v 5amp`;
        this.res.hdd = `HDD 1TB`;
      } else if (nr < 9) {
        this.res.recorder = "DVR cu 8 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} X mufe video-balun`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `Sursa de alimentare 12v 10amp`;
        this.res.hdd = `HDD 2TB`;
      } else if (nr < 17) {
        this.res.recorder = "DVR cu 16 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} mufe video-balun`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `Sursa de alimentare 12v 15amp`;
        this.res.hdd = `HDD 4TB`;
      } else if (nr < 33) {
        this.res.recorder = "DVR cu 32 canale";
        this.res.nrMufAl = nr;
        this.res.nrVideoBalun = `${2 * nr} X mufe video-balun`;
        this.res.cable = `Cel putin ${30 * nr} metri de UTP si MYYM 2x0.75`;
        this.res.amp = `2 x Sursa de alimentare 12v 15amp`;
        this.res.hdd = `HDD 6TB`;
      }
    }
  }
}
