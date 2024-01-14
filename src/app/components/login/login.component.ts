import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form: FormGroup;
    initialValue = {
        email: null,
        password: null,
    };

    constructor(protected fb: FormBuilder, protected usersService: UsersService, private router: Router) {
        this.form = this.fb.group(this.initialValue);
    }

    login() {
        if (this.form.valid) {
            const payload = this.generateLoginPayload(this.form.value);

            this.usersService.login(payload)
                .subscribe((result: any) => {
                    if (result) {
                        localStorage.setItem('SESSION_ID', result.sessionId);
                        localStorage.setItem('USER_ID', result.userId);
                        localStorage.setItem('IS_DOCTOR', result.doctor);

                        this.router.navigate(['Profile']);
                    }
                });
        }
    }

    private generateLoginPayload(data: any): any {
        const result: any = { };

        if (data.email) {
            result.email = data.email;
        }

        if (data.password) {
            result.password = data.password;
        }
        
        return result;
    }
}
