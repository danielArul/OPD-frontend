import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  formData = {
    first_name: '',
    last_name: '',
    email: '',
    date_of_appointment: null,
    selectedDoctor:'',
    availableTimes:''
  };

  listOfDoctor:any =[];
  listOfAvailableTimes:any=[]; 

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getDoctorsList();    
  }

  getDoctorsList(){
    this.http.get('http://localhost:8080/getAllDoctors').subscribe(
      res=>{
        this.listOfDoctor=res;
        console.log(this.listOfDoctor);
        console.log(this.listOfDoctor[0]);
      }
    )
  }

  getDoctorDetails(selectedDoctor:any){
     
     const id = selectedDoctor.id;
     const numId=Number(id);
     //const id=this.formData.selectedDoctor.
     this.http.get('http://localhost:8080/getDoctorAvailability/' + id).subscribe(
      res=>{
        this.listOfAvailableTimes=res;
        console.log(this.listOfAvailableTimes);
      }
     ) 
      
  }

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.formData);
    this.http.post('http://localhost:8080/addPatient',this.formData)
    .subscribe(response=>{
      console.log('HTTP response',response);
    })
  }
}
