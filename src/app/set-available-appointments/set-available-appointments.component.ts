import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-available-appointments',
  templateUrl: './set-available-appointments.component.html',
  styleUrls: ['./set-available-appointments.component.css']
})
export class SetAvailableAppointmentsComponent implements OnInit{
  formData = {     
    doctor:'',
    availableTimes:''
  };

  listOfDoctor:any =[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getDoctorsList();
  }

  getDoctorsList(){
    this.http.get('http://localhost:8080/getAllDoctors').subscribe(
      res=>{
        this.listOfDoctor=res;         
      }
    )
  }

  onSubmit(){
    console.log(this.formData);
    this.http.post('http://localhost:8080/addDoctorAvailability',this.formData)
    .subscribe(response=>{
      console.log('HTTP response',response);
    })
  }

  getDoctorDetails(){

  }
}
