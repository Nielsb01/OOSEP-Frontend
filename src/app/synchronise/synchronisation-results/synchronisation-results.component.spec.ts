import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronisationResultsComponent } from './synchronisation-results.component';

describe('SynchronisationResultsComponent', () => {
  let component: SynchronisationResultsComponent;
  let fixture: ComponentFixture<SynchronisationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchronisationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchronisationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
