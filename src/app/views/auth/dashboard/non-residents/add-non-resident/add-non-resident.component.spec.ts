import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonResidentComponent } from './add-non-resident.component';

describe('AddNonResidentComponent', () => {
  let component: AddNonResidentComponent;
  let fixture: ComponentFixture<AddNonResidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNonResidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNonResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
