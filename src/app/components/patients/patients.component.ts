import { Component } from '@angular/core';
import { PatientsService } from 'src/app/services';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {
  myData: Partial<any>[];
  allData: Partial<any>[];
  displayedColumns: string[] = ['id', 'firstName', 'middleName', 'lastName', 'ssn', 'email', 'healthInsurancePaid'];

  constructor(protected patientsService: PatientsService) {
    this.getData();
  }

  getData() {
    const doctorId = localStorage.getItem('doctorId');
    
    if (doctorId) {
      this.patientsService.getPatientByDoctorId(doctorId)
      .subscribe((result: any) => {
        if (result) {
          this.myData = result;
        }
      });
    }

    this.patientsService.getPatients()
      .subscribe((result: any) => {
        if (result) {
          this.allData = result;
        }
      });
  }

  handleDeletePatient(id: string) {
    if (id) {
      this.patientsService.deletePatient(id)
        .subscribe((result: boolean) => {
          if (result) {
            alert('Patient deleted successfully!');

            this.getData();
          }
        })
    }
  }
}
