import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointmentList: any = [];
  
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    //this.appointmentList = this.getProductList();
    this.getProductList();
    
  }

  getProductList(){
    return this.http.get('http://localhost:8080/getAllPatients').subscribe(res=>{
      this.appointmentList = res;
      console.log(this.appointmentList);
      }
    );
  }  

  

}
