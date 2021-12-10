import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportDetailComponent } from './raport-detail.component';

describe('RaportDetailComponent', () => {
  let component: RaportDetailComponent;
  let fixture: ComponentFixture<RaportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
