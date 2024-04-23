import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalAdminComponent } from './pagina-principal-admin.component';

describe('PaginaPrincipalAdminComponent', () => {
  let component: PaginaPrincipalAdminComponent;
  let fixture: ComponentFixture<PaginaPrincipalAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalAdminComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
