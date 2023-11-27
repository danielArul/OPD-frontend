import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private httpClient:HttpClient){}

  onSubmit(userForm: NgForm):void{

    this.httpClient.post('http://localhost:8080/addUser',userForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
}
