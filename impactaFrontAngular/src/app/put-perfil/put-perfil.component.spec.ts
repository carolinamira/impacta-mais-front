import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPerfilComponent } from './put-perfil.component';

describe('PutPerfilComponent', () => {
  let component: PutPerfilComponent;
  let fixture: ComponentFixture<PutPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
