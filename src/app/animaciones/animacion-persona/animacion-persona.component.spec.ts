import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionPersonaComponent } from './animacion-persona.component';

describe('AnimacionPersonaComponent', () => {
  let component: AnimacionPersonaComponent;
  let fixture: ComponentFixture<AnimacionPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimacionPersonaComponent]
    });
    fixture = TestBed.createComponent(AnimacionPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
