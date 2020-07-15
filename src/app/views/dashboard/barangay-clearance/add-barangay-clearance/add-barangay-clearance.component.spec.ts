import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBarangayClearanceComponent } from './add-barangay-clearance.component';

describe('AddBarangayClearanceComponent', () => {
  let component: AddBarangayClearanceComponent;
  let fixture: ComponentFixture<AddBarangayClearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarangayClearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBarangayClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
