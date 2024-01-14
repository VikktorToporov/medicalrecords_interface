import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { DoctorsService, UsersService } from 'src/app/services';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    form: FormGroup;
    initialValue = {
        email: null,
        password: null,
        password2: null,
        roleDoctor: true,
        doctorId: null,
    };

    doctors: any = [];

    constructor(protected fb: FormBuilder, protected usersService: UsersService, protected doctorsService: DoctorsService, private router: Router) {
        this.form = this.fb.group(this.initialValue);
        this.getAllDoctors();
    }

    getAllDoctors() {
        this.doctorsService.getDoctors()
            .subscribe((result: any) => {
                this.doctors = result;
            });
    }

    signup() {
        if (this.form.valid) {
            const payload = this.generateSignupPayload(this.form.value);

            this.usersService.register(payload)
                .subscribe((result: any) => {
                    if (result) {
                        this.router.navigate(['Login']);
                    }
                });
        }
    }

    private generateSignupPayload(data: any): any {
        const result: any = { };

        if (data.email) {
            result.email = data.email;
        }

        if (data.password && data.password === data.password2) {
            result.password = data.password;
        }

        if (data.roleDoctor) {
            result.roleDoctor = true;
        } else {
            result.roleDoctor = false;

            if (data.doctorId) {
                result.doctorId = data.doctorId;
            }
        }
        
        return result;
    }
}
