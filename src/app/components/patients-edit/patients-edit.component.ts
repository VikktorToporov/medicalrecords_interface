import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientsService } from 'src/app/services';

@Component({
  selector: 'app-patients-edit',
  templateUrl: './patients-edit.component.html',
  styleUrls: ['./patients-edit.component.scss']
})
export class PatientsEditComponent implements OnInit {
  patientId: string;
  doctorId: string;
  id: string;
  patient: any;
  form: FormGroup;

  initialValue = {
    firstName: null,
    middleName: null,
    lastName: null,
    ssn: null,
    doctorId: null,
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private patientsService: PatientsService, private router: Router) { }

  ngOnInit(): void {
    this.handleGetEdit();
  }

  editPatient() {
    const payload = { ...this.patient, ...this.form.value };

    this.patientsService.updatePatient(payload)
      .subscribe((result: string) => {
        if (result) {
          alert('Patient edited successfully!');

          this.router.navigate(['/Patients']);
        }
      });
  }

  private handleGetEdit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.doctorId = localStorage.getItem('doctorId');

      if (this.id && this.doctorId) {
        this.patientsService.getPatientById(this.id)
          .subscribe((result: any[]) => {
          if (result) {
              this.patient = result;

              this.initialValue = {
                doctorId: this.doctorId,
                firstName: this.patient.firstName,
                middleName: this.patient.middleName,
                lastName: this.patient.lastName,
                ssn: this.patient.ssn,
              };

              this.form = this.fb.group(this.initialValue);
            }
          });
      }
    });
  }
}