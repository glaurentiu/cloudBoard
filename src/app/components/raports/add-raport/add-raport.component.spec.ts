import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaportComponent } from './add-raport.component';

describe('AddRaportComponent', () => {
  let component: AddRaportComponent;
  let fixture: ComponentFixture<AddRaportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRaportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
