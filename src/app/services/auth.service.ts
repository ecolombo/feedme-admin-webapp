import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_URL ="login";

  constructor(private httpClient: HttpClient) { }

  loginAdmin(adminObj:any) {
    return this.httpClient.post<any[]>(`${environment.apiBaseUrl}/admins/login`, adminObj);
  }

}
