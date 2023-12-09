import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pageable } from "../model/pageable.model";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn : 'root'
})
export class UsersService {

    private USER_URL =`${environment.apiBaseUrl}/users`;

    constructor(private httpClient: HttpClient) { }

    /** Get users List */
    getAll(pageable:Pageable){
        return this.httpClient.get<any[]>(`${this.USER_URL}?page=${pageable.page}&size=${pageable.size}&sort=${pageable.sort}&sortOrder=${pageable.sortOrder}`);
    }

    /** Get one user */
    getOne(userId:number){
        return this.httpClient.get<any[]>(`${this.USER_URL}/${userId}`);
    }

    /** Add user */
    add(userObj:any){
        return this.httpClient.post<any>(`${this.USER_URL}`,userObj);
    }

    /** Update user */
    update(userObj:any){
        return this.httpClient.put<any>(`${this.USER_URL}`,userObj);
    }

    /** Delete user */
    delete(userId:number){
        return this.httpClient.delete<any>(`${this.USER_URL}/${userId}`);
    }
}