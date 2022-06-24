import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSubcontractorsComponent } from './staff-subcontractors.component';

describe('StaffSubcontractorsComponent', () => {
  let component: StaffSubcontractorsComponent;
  let fixture: ComponentFixture<StaffSubcontractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSubcontractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSubcontractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
