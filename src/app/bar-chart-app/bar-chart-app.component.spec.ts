import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartAppComponent } from './bar-chart-app.component';

describe('BarChartAppComponent', () => {
  let component: BarChartAppComponent;
  let fixture: ComponentFixture<BarChartAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
