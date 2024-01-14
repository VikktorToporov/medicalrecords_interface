import { Component } from '@angular/core';
import { DoctorsService } from 'src/app/services';

@Component({
  selector: 'app-patients-report',
  templateUrl: './patients-report.component.html',
  styleUrls: ['./patients-report.component.scss']
})
export class PatientsReportComponent {
  data: Partial<any>[];
  displayedColumns: string[] = ['doctor', 'count'];

  constructor(protected doctorsService: DoctorsService) {
    this.getData();
  }

  getData() {
    this.doctorsService.getReportPatientCount()
      .subscribe((result: any) => {
        if (result) {
          this.data = result;
        }
      });
  }
}
