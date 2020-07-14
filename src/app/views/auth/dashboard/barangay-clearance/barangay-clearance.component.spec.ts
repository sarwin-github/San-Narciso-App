import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayClearanceComponent } from './barangay-clearance.component';

describe('BarangayClearanceComponent', () => {
  let component: BarangayClearanceComponent;
  let fixture: ComponentFixture<BarangayClearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangayClearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangayClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
