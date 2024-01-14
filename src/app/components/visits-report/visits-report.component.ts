import { Component } from '@angular/core';
import { DoctorsService } from 'src/app/services';

@Component({
  selector: 'app-visits-report',
  templateUrl: './visits-report.component.html',
  styleUrls: ['./visits-report.component.scss']
})
export class VisitsReportComponent {
  data: Partial<any>[];
  displayedColumns: string[] = ['doctor', 'count'];

  constructor(protected doctorsService: DoctorsService) {
    this.getData();
  }

  getData() {
    this.doctorsService.getReportVisitCount()
      .subscribe((result: any) => {
        if (result) {
          this.data = result;
        }
      });
  }
}
