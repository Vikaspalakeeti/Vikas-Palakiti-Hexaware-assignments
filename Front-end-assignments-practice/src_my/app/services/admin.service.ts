import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  constructor(private http:HttpClient) { }

  baseURL:string = 'http://localhost:8185/api/';

  getGeneratedToken(requestBody: any){

        return this.http.post(this.baseURL+"login/adminlogin",requestBody,{responseType: 'text' as 'json'});

    }

    authorizationTest(token:any){

          let tokenString = "Bearer "+token;

         const headers =  new HttpHeaders().set("Authorization",tokenString);


        return this.http.get(this.baseURL+"Admin/getAllAdmin",{headers,responseType:'text' as 'json'});

    }
    insert(body:Admin):Observable<Admin>{

      console.log(body);

        return this.http.post<Admin>(this.baseURL+"Admin/addAdmin",body);

    }


    delete(adminId: number, token: any): Observable<string> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete<string>(`${this.baseURL}Admin/deleteById/${adminId}`, { headers });
    }
    getId(adminId: number, token: any): Observable<Admin> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<Admin>(`${this.baseURL}Admin/getById/${adminId}`, { headers });
    }
    
}
