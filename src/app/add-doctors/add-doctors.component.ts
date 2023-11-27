import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent {

  formData = {
    first_name: '',
    last_name: '',
    email: ''     
  };

  constructor(private http: HttpClient){}

  onSubmit(){
    this.http.post('http://localhost:8080/addDoctor',this.formData).subscribe(
      res=>{
       console.log(res);
      }
    )
  }

}
