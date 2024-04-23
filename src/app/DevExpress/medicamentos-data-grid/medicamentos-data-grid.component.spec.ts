import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosDataGridComponent } from './medicamentos-data-grid.component';

describe('MedicamentosDataGridComponent', () => {
  let component: MedicamentosDataGridComponent;
  let fixture: ComponentFixture<MedicamentosDataGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentosDataGridComponent]
    });
    fixture = TestBed.createComponent(MedicamentosDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
