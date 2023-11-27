import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private httpClient: HttpClient) { }

  getAppointmentDetails(appointmentId:any){
    return this.httpClient.get("http://localhost:8080/getPatientById/"+appointmentId);
  }

  completeAppointment(appointmentId:any){
    return this.httpClient.get("http://localhost:8080/getPatientById/"+appointmentId);
  }
}
