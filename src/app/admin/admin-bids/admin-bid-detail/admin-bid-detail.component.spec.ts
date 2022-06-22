import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBidDetailComponent } from './admin-bid-detail.component';

describe('AdminBidDetailComponent', () => {
  let component: AdminBidDetailComponent;
  let fixture: ComponentFixture<AdminBidDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBidDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
