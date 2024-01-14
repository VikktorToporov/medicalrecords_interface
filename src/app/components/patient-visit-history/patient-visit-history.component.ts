import { Component } from '@angular/core';
import { VisitsService } from 'src/app/services';

@Component({
  selector: 'app-patient-visit-history',
  templateUrl: './patient-visit-history.component.html',
  styleUrls: ['./patient-visit-history.component.scss']
})
export class PatientVisitHistoryComponent {
  data: Partial<any>[];
  displayedColumns: string[] = ['doctor', 'diagnosis', 'treatment', 'sickLeaveStartDate', 'sickLeaveDays', 'date'];

  constructor(protected visitsService: VisitsService) {
    this.getData();
  }

  getData() {
    const patientId = localStorage.getItem('patientId');

    if (patientId) {
      this.visitsService.getVisitsByPatientId(patientId)
        .subscribe((result: any[]) => {
          if (result) {
            this.data = this.modifyData(result);
          }
        });
    }
  }

  private modifyData(data: any[]) {
    const result = [];

    if (data?.length > 0) {
      data.forEach(item => {
        if (item) {
          const toPush = { ...item };

          if (item.sickLeaveStartDate && item.sickLeaveDays) {
            toPush.sickLeaveEndDate = new Date().setDate(new Date(item.sickLeaveStartDate).getDate() + 3 );
          }

          result.push(toPush);
        }
      });
    }

    return result;
  }
}
