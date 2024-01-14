import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PatientsService {
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:8080/api/Patients';

    getPatients() {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetAll`, {
            headers: headers
        });
    }

    getPatientById(patientId: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetById?patientId=${patientId}`, {
            headers: headers
        });
    }

    getPatientByDoctorId(doctorId: string) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetByDoctorId?doctorId=${doctorId}`, {
            headers: headers
        });
    }

    getPatientByUserId(userId: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetByUserId?userId=${userId}`, {
            headers: headers
        });
    }

    getReportPatientsByDiagnosis() {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetReportPatientsByDiagnosis`, {
            headers: headers
        });
    }

    updatePatient(payload: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.put(`${this.baseUrl}`, payload, {
            headers: headers
        });
    }

    deletePatient(patientId: string) {
        const headers = this.createAuthorizationHeader();

        return this.http.delete(`${this.baseUrl}?patientId=${patientId}`, {
            headers: headers
        });
    }

    createAuthorizationHeader() {
        let headers = new HttpHeaders();
        headers = headers.append('Session-Id', localStorage.getItem('SESSION_ID'));

        return headers;
    }
}
