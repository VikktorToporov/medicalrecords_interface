import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DoctorsService {
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:8080/api/Doctors';

    getDoctors() {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetAll`, {
            headers: headers
        });
    }

    getDoctorById(doctorId: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetById?doctorId=${doctorId}`, {
            headers: headers
        });
    }

    getDoctorByUserId(userId: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetByUserId?userId=${userId}`, {
            headers: headers
        });
    }

    getReportPatientCount() {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetReportPatientCount`, {
            headers: headers
        });
    }

    getReportVisitCount() {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetReportVisitCount`, {
            headers: headers
        });
    }

    updateDoctor(payload: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.put(`${this.baseUrl}`, payload, {
            headers: headers
        });
    }

    createAuthorizationHeader() {
        let headers = new HttpHeaders();

        if (localStorage.getItem('SESSION_ID')) {
            headers = headers.append('Session-Id', localStorage.getItem('SESSION_ID'));
        }

        return headers;
    }
}
