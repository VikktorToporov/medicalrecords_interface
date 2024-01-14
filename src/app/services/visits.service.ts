import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VisitsService {
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:8080/api/Visits';

    getVisits() {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetAll`, {
            headers: headers
        });
    }

    getVisitsById(id: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetById?id=${id}`, {
            headers: headers
        });
    }

    getVisitsByPatientId(patientId: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetByPatientId?patientId=${patientId}`, {
            headers: headers
        });
    }

    getVisitsByDoctorId(doctorId: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`${this.baseUrl}/GetByDoctorId?doctorId=${doctorId}`, {
            headers: headers
        });
    }

    // getPatientByUserId(userId: any) {
    //     const headers = this.createAuthorizationHeader();

    //     return this.http.get(`${this.baseUrl}/GetByUserId?userId=${userId}`, {
    //         headers: headers
    //     });
    // }

    // updatePatient(payload: any) {
    //     const headers = this.createAuthorizationHeader();

    //     return this.http.put(`${this.baseUrl}`, payload, {
    //         headers: headers
    //     });
    // }

    insertVisit(visit: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.post(`${this.baseUrl}`, visit, {
            headers: headers
        });
    }

    editVisit(visit: any) {
        const headers = this.createAuthorizationHeader();

        return this.http.put(`${this.baseUrl}`, visit, {
            headers: headers
        });
    }

    deleteVisit(visitId: string) {
        const headers = this.createAuthorizationHeader();

        return this.http.delete(`${this.baseUrl}?visitId=${visitId}`, {
            headers: headers
        });
    }

    createAuthorizationHeader() {
        let headers = new HttpHeaders();
        headers = headers.append('Session-Id', localStorage.getItem('SESSION_ID'));

        return headers;
    }
}
