import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableAffichageComponent } from './data-table-affichage.component';

describe('DataTableAffichageComponent', () => {
  let component: DataTableAffichageComponent;
  let fixture: ComponentFixture<DataTableAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableAffichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
