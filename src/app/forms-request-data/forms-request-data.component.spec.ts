import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRequestDataComponent } from './forms-request-data.component';

describe('FormsRequestDataComponent', () => {
  let component: FormsRequestDataComponent;
  let fixture: ComponentFixture<FormsRequestDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsRequestDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRequestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
