import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisClientesComponent } from './mis-clientes.component';

describe('MisClientesComponent', () => {
  let component: MisClientesComponent;
  let fixture: ComponentFixture<MisClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisClientesComponent]
    });
    fixture = TestBed.createComponent(MisClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
