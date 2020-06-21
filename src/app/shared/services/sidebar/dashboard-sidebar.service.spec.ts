import { TestBed } from '@angular/core/testing';

import { DashboardSidebarService } from './dashboard-sidebar.service';

describe('DashboardSidebarService', () => {
  let service: DashboardSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
