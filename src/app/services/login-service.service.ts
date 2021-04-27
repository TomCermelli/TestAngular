import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl : string;

  constructor(private http : HttpClient) {
    this.baseUrl = 'http://localhost:3000/user/';
   }

  findByEmail(email : string){
    return this.http.get<User[]>(this.baseUrl + "?email="+email);
  }
}
