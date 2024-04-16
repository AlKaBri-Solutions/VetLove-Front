import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionPerroComponent } from './animacion-perro.component';

describe('AnimacionPerroComponent', () => {
  let component: AnimacionPerroComponent;
  let fixture: ComponentFixture<AnimacionPerroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimacionPerroComponent]
    });
    fixture = TestBed.createComponent(AnimacionPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
