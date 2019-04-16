import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDbdataComponent } from './test-dbdata.component';

describe('TestDbdataComponent', () => {
  let component: TestDbdataComponent;
  let fixture: ComponentFixture<TestDbdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDbdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDbdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
