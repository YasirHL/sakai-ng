import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingSubcontractorsComponent } from './admin-pending-subcontractors.component';

describe('AdminPendingSubcontractorsComponent', () => {
  let component: AdminPendingSubcontractorsComponent;
  let fixture: ComponentFixture<AdminPendingSubcontractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPendingSubcontractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPendingSubcontractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
