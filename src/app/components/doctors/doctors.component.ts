import { Component } from '@angular/core';

import { DoctorsService } from 'src/app/services';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  data: Partial<any>[];
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'email', 'specialty', 'gp'];

  constructor(protected doctorsService: DoctorsService) {
    this.getData();
  }

  getData() {
    this.doctorsService.getDoctors()
      .subscribe((result: any) => {
        if (result) {
          this.data = result;
        }
      });
  }
}
