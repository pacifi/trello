import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private httpClient = inject(HttpClient);
    apiUrl = environment.API_URL;

    constructor() {
    }

    login(email: string, password: string) {
        return this.httpClient.post(`${this.apiUrl}/api/v1/auth/login`, {email, password})
    }
}
