import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionVetComponent } from './animacion-vet.component';

describe('AnimacionVetComponent', () => {
  let component: AnimacionVetComponent;
  let fixture: ComponentFixture<AnimacionVetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimacionVetComponent]
    });
    fixture = TestBed.createComponent(AnimacionVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
