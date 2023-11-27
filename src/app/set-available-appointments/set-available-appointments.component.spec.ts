import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAvailableAppointmentsComponent } from './set-available-appointments.component';

describe('SetAvailableAppointmentsComponent', () => {
  let component: SetAvailableAppointmentsComponent;
  let fixture: ComponentFixture<SetAvailableAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetAvailableAppointmentsComponent]
    });
    fixture = TestBed.createComponent(SetAvailableAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
