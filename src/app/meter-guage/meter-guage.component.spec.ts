import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterGuageComponent } from './meter-guage.component';

describe('MeterGuageComponent', () => {
  let component: MeterGuageComponent;
  let fixture: ComponentFixture<MeterGuageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterGuageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
