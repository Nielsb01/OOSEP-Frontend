import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchroniseComponent } from './synchronise.component';

describe('SynchroniseComponent', () => {
  let component: SynchroniseComponent;
  let fixture: ComponentFixture<SynchroniseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchroniseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchroniseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
