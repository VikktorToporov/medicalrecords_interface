import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isDoctor = false;

    constructor(protected usersService: UsersService, private router: Router) { 
        if (localStorage.getItem('IS_DOCTOR') === 'true') {
            this.isDoctor = true;
        }
    }

    logout() {
        this.usersService.logout()
            .subscribe((result: any) => {
                if (result) {
                    localStorage.removeItem('IS_DOCTOR');
                    localStorage.removeItem('SESSION_ID');
                    localStorage.removeItem('USER_ID');
                    localStorage.removeItem('patientId');
                    localStorage.removeItem('doctorId');

                    this.router.navigate(['Landing']);
                }
            });
    }
}
