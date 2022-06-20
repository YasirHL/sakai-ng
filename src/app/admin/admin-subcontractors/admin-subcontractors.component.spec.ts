import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubcontractorsComponent } from './admin-subcontractors.component';

describe('AdminSubcontractorsComponent', () => {
  let component: AdminSubcontractorsComponent;
  let fixture: ComponentFixture<AdminSubcontractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubcontractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubcontractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
