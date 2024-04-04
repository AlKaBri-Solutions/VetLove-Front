import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTratamientosComponent } from './mis-tratamientos.component';

describe('MisTratamientosComponent', () => {
  let component: MisTratamientosComponent;
  let fixture: ComponentFixture<MisTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisTratamientosComponent]
    });
    fixture = TestBed.createComponent(MisTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
