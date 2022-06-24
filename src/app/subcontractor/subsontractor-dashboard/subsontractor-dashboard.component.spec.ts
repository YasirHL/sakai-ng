import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsontractorDashboardComponent } from './subsontractor-dashboard.component';

describe('SubsontractorDashboardComponent', () => {
  let component: SubsontractorDashboardComponent;
  let fixture: ComponentFixture<SubsontractorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsontractorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsontractorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
