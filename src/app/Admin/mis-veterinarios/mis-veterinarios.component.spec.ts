import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisVeterinariosComponent } from './mis-veterinarios.component';

describe('MisVeterinariosComponent', () => {
  let component: MisVeterinariosComponent;
  let fixture: ComponentFixture<MisVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisVeterinariosComponent]
    });
    fixture = TestBed.createComponent(MisVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
