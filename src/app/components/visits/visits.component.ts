import { Component } from '@angular/core';
import { VisitsService } from 'src/app/services';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent {
  myData: Partial<any>[];
  allData: Partial<any>[];
  displayedColumns: string[] = ['id', 'patient', 'diagnosis', 'treatment', 'sickLeaveStartDate', 'sickLeaveDays', 'date'];

  constructor(protected visitsService: VisitsService) {
    this.getData();
  }

  getData() {
    const doctorId = localStorage.getItem('doctorId');
    
    if (doctorId) {
      this.visitsService.getVisitsByDoctorId(doctorId)
      .subscribe((result: any) => {
        if (result) {
          this.myData = this.modifyData(result);
        }
      });
    }

    this.visitsService.getVisits()
      .subscribe((result: any[]) => {
        if (result) {
          this.allData = this.modifyData(result);
        }
      });
  }

  handleDeleteVisit(id: string) {
    if (id) {
      this.visitsService.deleteVisit(id)
        .subscribe((result: boolean) => {
          if (result) {
            alert('Visit deleted successfully!');

            this.getData();
          }
        })
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
