import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { VisitsService, PatientsService } from 'src/app/services';

@Component({
  selector: 'app-visits-edit',
  templateUrl: './visits-edit.component.html',
  styleUrls: ['./visits-edit.component.scss']
})
export class VisitsEditComponent implements OnInit {
  patientId: string;
  doctorId: string;
  id: string;
  patient: any;
  form: FormGroup;

  initialValue = {
    id: null,
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
    this.handleGetEdit();
  }

  editVisit() {
    this.visitsService.editVisit(this.form.value)
      .subscribe((result: string) => {
        if (result) {
          alert('Visit edited successfully!');

          this.router.navigate(['/Visits']);
        }
      });
  }

  private handleGetEdit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.doctorId = localStorage.getItem('doctorId');

      if (this.id && this.doctorId) {
        this.visitsService.getVisitsById(this.id)
          .subscribe((result: any) => {
          if (result) {
              this.patient = result.patient;
              this.patientId = result.patient?.value;

              this.initialValue = {
                id: this.id,
                patient: this.patientId,
                doctor: this.doctorId,
                date: result.date,
                diagnosis: result.diagnosis,
                treatment: result.treatment,
                sickLeaveDays: result.sickLeaveDays,
                sickLeaveStartDate: result.sickLeaveStartDate,
              };

              this.form = this.fb.group(this.initialValue);
            }
          });
      }
    });
  }
}
