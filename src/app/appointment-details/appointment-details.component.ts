import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentServiceService } from '../services/appointment-service.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit{

  AppointmentDetails:any;
  
  constructor(private route: ActivatedRoute,
              private appointmentService:AppointmentServiceService,
              private httpClient:HttpClient)
  {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleAppointmentDetails();
    })
  }
  
  onSubmit(form:NgForm){
    console.log(form.value)
     
    this.httpClient.post('http://localhost:8080/completeReservation/'+this.AppointmentDetails.id, form.value).subscribe(
      res=>{
        console.log(res);
      }
    )

  }

  handleAppointmentDetails() {
     
    const appointmentId = this.route.snapshot.paramMap.get('id');
    if(appointmentId){
      this.appointmentService.getAppointmentDetails(appointmentId).subscribe(
        res=>{
          this.AppointmentDetails=res;
          console.log(this.AppointmentDetails);
        }
      )
    }  
     
  }
}
