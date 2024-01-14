import { Component } from '@angular/core';
import { PatientsService } from 'src/app/services';

@Component({
  selector: 'app-diagnosis-report',
  templateUrl: './diagnosis-report.component.html',
  styleUrls: ['./diagnosis-report.component.scss']
})
export class DiagnosisReportComponent {
  data: Partial<any>[];
  displayedColumns: string[] = ['diagnosis', 'count'];

  constructor(protected patientsService: PatientsService) {
    this.getData();
  }

  getData() {
    this.patientsService.getReportPatientsByDiagnosis()
      .subscribe((result: any) => {
        if (result) {
          this.data = result;
        }
      });
  }
}
