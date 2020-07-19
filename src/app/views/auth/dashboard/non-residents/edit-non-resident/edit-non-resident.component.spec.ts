import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonResidentComponent } from './edit-non-resident.component';

describe('EditNonResidentComponent', () => {
  let component: EditNonResidentComponent;
  let fixture: ComponentFixture<EditNonResidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNonResidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNonResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
