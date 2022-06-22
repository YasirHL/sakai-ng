import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBidsComponent } from './admin-bids.component';

describe('AdminBidsComponent', () => {
  let component: AdminBidsComponent;
  let fixture: ComponentFixture<AdminBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
