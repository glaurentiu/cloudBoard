import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestRaportComponent } from './add-request-raport.component';

describe('AddRequestRaportComponent', () => {
  let component: AddRequestRaportComponent;
  let fixture: ComponentFixture<AddRequestRaportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequestRaportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequestRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
