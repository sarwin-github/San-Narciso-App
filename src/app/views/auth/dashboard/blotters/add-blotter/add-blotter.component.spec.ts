import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlotterComponent } from './add-blotter.component';

describe('AddBlotterComponent', () => {
  let component: AddBlotterComponent;
  let fixture: ComponentFixture<AddBlotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
