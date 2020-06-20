import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTaskForceComponent } from './covid-task-force.component';

describe('CovidTaskForceComponent', () => {
  let component: CovidTaskForceComponent;
  let fixture: ComponentFixture<CovidTaskForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTaskForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTaskForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
