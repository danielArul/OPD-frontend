import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { SetAvailableAppointmentsComponent } from './set-available-appointments/set-available-appointments.component';
import { PatientTemplateDrivenFormComponent } from './patient-template-driven-form/patient-template-driven-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path:'',
    component:PatientFormComponent
  },
  {
    path:'appointments',
    component:AppointmentsComponent
  },
  {
    path:'appointmentform',
    component:PatientFormComponent
  },
  {
    path:'appointments/:id',
    component:AppointmentDetailsComponent
  },
  {
    path:'addDoctors',
    component:AddDoctorsComponent
  },
  {
    path:'setAvailableAppointments',
    component:SetAvailableAppointmentsComponent
  },
  {
    path:'setAvailableAppointmentsTDF',
    component:PatientTemplateDrivenFormComponent
  },
  {
    path:'register',
    component:UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 

export class AppRoutingModule { }
