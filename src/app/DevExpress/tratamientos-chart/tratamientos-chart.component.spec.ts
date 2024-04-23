import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosChartComponent } from './tratamientos-chart.component';

describe('TratamientosChartComponent', () => {
  let component: TratamientosChartComponent;
  let fixture: ComponentFixture<TratamientosChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientosChartComponent]
    });
    fixture = TestBed.createComponent(TratamientosChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
