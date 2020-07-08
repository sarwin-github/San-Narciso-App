import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlotterComponent } from './edit-blotter.component';

describe('EditBlotterComponent', () => {
  let component: EditBlotterComponent;
  let fixture: ComponentFixture<EditBlotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
