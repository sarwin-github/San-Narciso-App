import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBarangayClearanceComponent } from './edit-barangay-clearance.component';

describe('EditBarangayClearanceComponent', () => {
  let component: EditBarangayClearanceComponent;
  let fixture: ComponentFixture<EditBarangayClearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBarangayClearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBarangayClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
