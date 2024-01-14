import { Component } from '@angular/core';
import { PatientsService, DoctorsService, UsersService } from 'src/app/services';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    data: any;
    showFinishSignup = false;
    isDoctor = false;
    isLoading = true;

    constructor(protected patientsService: PatientsService, protected doctorsService: DoctorsService, protected usersService: UsersService) {
        if (localStorage.getItem('SESSION_ID') && localStorage.getItem('USER_ID')) {
            this.getData(localStorage.getItem('USER_ID'));
        }
    }

    handleFinishSignup(payload: any) {
        if (this.isDoctor) {
            this.handleFinishDoctorSignup(payload);
        } else {
            this.handleFinishPatientSignup(payload);
        }
    }

    editProfile() {
       this.showFinishSignup = true;
    }

    private handleFinishDoctorSignup(payload: any) {
        if (payload) {
            const doctorPayload = this.generateFinishDoctorSignupPayload(payload);

            this.doctorsService.updateDoctor(doctorPayload)
                .subscribe((result: any) => {
                    if (result) {
                        this.isDoctor = false;
                        this.isLoading = true;

                        this.getData(localStorage.getItem('USER_ID'));
                    }
                });
        }
    }

    private handleFinishPatientSignup(payload: any) {
        if (payload) {
            const patientPayload = this.generateFinishPatientSignupPayload(payload);

            this.patientsService.updatePatient(patientPayload)
                .subscribe((result: any) => {
                    if (result) {
                        this.isDoctor = false;
                        this.isLoading = true;

                        this.getData(localStorage.getItem('USER_ID'));
                    }
                });
        }
    }

    private generateFinishDoctorSignupPayload(payload: any) {
        const result: any = { };

        if (payload) {
            if (payload.id) {
                result.id = payload.id;
            }

            if (payload.firstName) {
                result.firstName = payload.firstName;
            }

            if (payload.middleName) {
                result.middleName = payload.middleName;
            }

            if (payload.lastName) {
                result.lastName = payload.lastName;
            }

            if (payload.email) {
                result.email = payload.email;
            }

            if (payload.specialty) {
                result.specialty = payload.specialty;
            }

            if (payload.gp) {
                result.gp = payload.gp;
            } else {
                result.gp = false;
            }
        }

        return result;
    }

    private generateFinishPatientSignupPayload(payload: any) {
        const result: any = { };

        if (payload) {
            if (payload.id) {
                result.id = payload.id;
            }

            if (payload.firstName) {
                result.firstName = payload.firstName;
            }

            if (payload.middleName) {
                result.middleName = payload.middleName;
            }

            if (payload.lastName) {
                result.lastName = payload.lastName;
            }

            if (payload.email) {
                result.email = payload.email;
            }

            if (payload.ssn) {
                result.ssn = payload.ssn;
            }

            if (payload.healthInsurancePaid) {
                result.healthInsurancePaid = payload.healthInsurancePaid;
            } else {
                result.healthInsurancePaid = false;
            }

            if (payload.doctorId) {
                result.doctorId = payload.doctorId;
            }
        }

        return result;
    }

    private getData(userId: string) {
        if (userId) {
            const isDoctor = localStorage.getItem('IS_DOCTOR') === 'true' ? true : false;

            if (isDoctor) {
                this.getDoctorData(userId);
            } else {
                this.getPatientData(userId);
            }
        }
    }

    private getDoctorData(userId: string) {
        if (userId) {
            this.doctorsService.getDoctorByUserId(userId)
                .subscribe((result: any) => {
                    if (result) {
                        this.data = result;
                        this.isDoctor = true;
                        this.isLoading = false;
                        localStorage.setItem('doctorId', this.data.id);

                        this.handleAdditionalLogic();
                    }
                });
        }
    }

    private getPatientData(userId: string) {
        if (userId) {
            this.patientsService.getPatientByUserId(userId)
                .subscribe((result: any) => {
                    if (result) {
                        this.data = result;
                        this.isDoctor = false;
                        this.isLoading = false;
                        localStorage.setItem('patientId', this.data.id);

                        this.handleAdditionalLogic();
                    }
                });
        }
    }

    private handleAdditionalLogic() {
        if (this.data && !this.data.firstName && !this.data.middleName && !this.data.lastName) {
            // Sign Up not finished

            this.showFinishSignup = true;
        } else {
            this.showFinishSignup = false;
        }
    }
}
