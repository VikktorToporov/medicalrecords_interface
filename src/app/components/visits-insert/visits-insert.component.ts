import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientsService, VisitsService } from 'src/app/services';

@Component({
  selector: 'app-visits-insert',
  templateUrl: './visits-insert.component.html',
  styleUrls: ['./visits-insert.component.scss']
})
export class VisitsInsertComponent implements OnInit {
  patientId: string;
  doctorId: string;
  patient: any;
  form: FormGroup;

  initialValue = {
    patient: null,
    doctor: null,
    date: null,
    diagnosis: null,
    treatment: null,
    sickLeaveDays: null,
    sickLeaveStartDate: null,
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private visitsService: VisitsService, private patientsService: PatientsService, private router: Router) { }

  ngOnInit(): void {
    this.handlePatientId();
  }

  insertVisit() {
    this.visitsService.insertVisit(this.form.value)
      .subscribe((result: string) => {
        if (result) {
          alert('Visit created successfully!');

          this.router.navigate(['/Visits']);
        }
      });
  }

  private handlePatientId() {
    this.route.params.subscribe(params => {
      this.patientId = params['patientId'];
      this.doctorId = localStorage.getItem('doctorId');

      if (this.patientId && this.doctorId) {
        this.initialValue.patient = this.patientId;
        this.initialValue.doctor = this.doctorId;

        this.form = this.fb.group(this.initialValue);

        this.getPatientInfo();
      }
    });
  }

  private getPatientInfo() {
    this.patientsService.getPatientById(this.patientId)
      .subscribe((result: any) => {
        if (result) {
         this.patient = result;
        }
      });
  }
}
