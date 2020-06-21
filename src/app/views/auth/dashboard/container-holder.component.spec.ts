import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHolderComponent } from './container-holder.component';

describe('ContainerHolderComponent', () => {
  let component: ContainerHolderComponent;
  let fixture: ComponentFixture<ContainerHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
