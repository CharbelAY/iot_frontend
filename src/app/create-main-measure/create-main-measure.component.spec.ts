import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMainMeasureComponent } from './create-main-measure.component';

describe('CreateMainMeasureComponent', () => {
  let component: CreateMainMeasureComponent;
  let fixture: ComponentFixture<CreateMainMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMainMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMainMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
