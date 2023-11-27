import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { SetAvailableAppointmentsComponent } from './set-available-appointments/set-available-appointments.component';
import { PatientTemplateDrivenFormComponent } from './patient-template-driven-form/patient-template-driven-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    HeaderComponent,
    AppointmentsComponent,
    AppointmentDetailsComponent,
    AddDoctorsComponent,
    SetAvailableAppointmentsComponent,
    PatientTemplateDrivenFormComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
