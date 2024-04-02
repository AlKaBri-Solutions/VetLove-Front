import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalVeterinarioComponent } from './pagina-principal-veterinario.component';

describe('PaginaPrincipalVeterinarioComponent', () => {
  let component: PaginaPrincipalVeterinarioComponent;
  let fixture: ComponentFixture<PaginaPrincipalVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalVeterinarioComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
