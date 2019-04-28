import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCardsViewComponent } from './history-cards-view.component';

describe('HistoryCardsViewComponent', () => {
  let component: HistoryCardsViewComponent;
  let fixture: ComponentFixture<HistoryCardsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCardsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
