import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalLoginComponent } from './pagina-principal-login.component';

describe('PaginaPrincipalLoginComponent', () => {
  let component: PaginaPrincipalLoginComponent;
  let fixture: ComponentFixture<PaginaPrincipalLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalLoginComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
