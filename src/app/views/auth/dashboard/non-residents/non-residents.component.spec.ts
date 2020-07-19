import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonResidentsComponent } from './non-residents.component';

describe('NonResidentsComponent', () => {
  let component: NonResidentsComponent;
  let fixture: ComponentFixture<NonResidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonResidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
