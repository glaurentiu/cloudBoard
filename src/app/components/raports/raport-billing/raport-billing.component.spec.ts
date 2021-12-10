import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportBillingComponent } from './raport-billing.component';

describe('RaportBillingComponent', () => {
  let component: RaportBillingComponent;
  let fixture: ComponentFixture<RaportBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
