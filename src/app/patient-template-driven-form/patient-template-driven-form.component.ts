import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-template-driven-form',
  templateUrl: './patient-template-driven-form.component.html',
  styleUrls: ['./patient-template-driven-form.component.css']
})
export class PatientTemplateDrivenFormComponent {
  onSubmit(form:NgForm){
    console.log(form.value)
    form.reset();
  }
}
