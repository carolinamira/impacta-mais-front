import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSangueComponent } from './footer-sangue.component';

describe('FooterSangueComponent', () => {
  let component: FooterSangueComponent;
  let fixture: ComponentFixture<FooterSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSangueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
