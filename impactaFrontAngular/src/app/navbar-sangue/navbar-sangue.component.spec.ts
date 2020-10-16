import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSangueComponent } from './navbar-sangue.component';

describe('NavbarSangueComponent', () => {
  let component: NavbarSangueComponent;
  let fixture: ComponentFixture<NavbarSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSangueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
