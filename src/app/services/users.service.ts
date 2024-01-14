import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:8080/api/Users';

    register(payload: any) {
        return this.http.post(`${this.baseUrl}`, payload);
    }

    login(payload: any) {
       return this.http.post(`${this.baseUrl}/Login`, payload);
    }

    logout() {
        const headers = this.createAuthorizationHeader();

        return this.http.put(`${this.baseUrl}/Logout`, null, {
            headers: headers
        });
    }

    getDoctors() {
        const headers = this.createAuthorizationHeader();

        return this.http.get(`http://localhost:8080/api/Doctors/GetAll`, {
            headers: headers
        });
    }

    createAuthorizationHeader() {
        let headers = new HttpHeaders();
        headers = headers.append('Session-Id', localStorage.getItem('SESSION_ID'));

        return headers;
    }
}
