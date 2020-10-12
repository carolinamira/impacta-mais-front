import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutHospitalComponent } from './put-hospital.component';

describe('PutHospitalComponent', () => {
  let component: PutHospitalComponent;
  let fixture: ComponentFixture<PutHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
