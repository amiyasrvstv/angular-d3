import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedGuageComponent } from './speed-guage.component';

describe('SpeedGuageComponent', () => {
  let component: SpeedGuageComponent;
  let fixture: ComponentFixture<SpeedGuageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedGuageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
