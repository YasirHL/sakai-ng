import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorkOrdersComponent } from './active-work-orders.component';

describe('ActiveWorkOrdersComponent', () => {
  let component: ActiveWorkOrdersComponent;
  let fixture: ComponentFixture<ActiveWorkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveWorkOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
