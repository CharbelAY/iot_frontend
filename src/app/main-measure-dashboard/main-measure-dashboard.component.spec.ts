import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeasureDashboardComponent } from './main-measure-dashboard.component';

describe('MainMeasureDashboardComponent', () => {
  let component: MainMeasureDashboardComponent;
  let fixture: ComponentFixture<MainMeasureDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMeasureDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeasureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
