import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedGuage2Component } from './speed-guage2.component';

describe('SpeedGuage2Component', () => {
  let component: SpeedGuage2Component;
  let fixture: ComponentFixture<SpeedGuage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedGuage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedGuage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
