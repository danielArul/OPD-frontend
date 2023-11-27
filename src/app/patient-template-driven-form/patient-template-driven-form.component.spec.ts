import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTemplateDrivenFormComponent } from './patient-template-driven-form.component';

describe('PatientTemplateDrivenFormComponent', () => {
  let component: PatientTemplateDrivenFormComponent;
  let fixture: ComponentFixture<PatientTemplateDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientTemplateDrivenFormComponent]
    });
    fixture = TestBed.createComponent(PatientTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
