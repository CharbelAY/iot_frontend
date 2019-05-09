import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfPacketsComponent } from './number-of-packets.component';

describe('NumberOfPacketsComponent', () => {
  let component: NumberOfPacketsComponent;
  let fixture: ComponentFixture<NumberOfPacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfPacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfPacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
