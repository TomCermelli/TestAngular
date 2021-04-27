import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {  
  baseUrl : string;

  constructor(private http : HttpClient) { 
    this.baseUrl = 'http://localhost:3000/user/';
  }

  get(page : number, limit : number, query : string) {
    return this.http.get<User[]>(this.baseUrl + '?_page='+page+ "&_limit="+ limit + query, {observe : "response"});
  }

  findById(id : number) {
    return this.http.get<User>(this.baseUrl + id);
  }

  getByName(name : string){
    return this.http.get<User[]>(this.baseUrl + '?name_like='+name, {observe : "response"});
  }

  create(user: User){
    return this.http.post(this.baseUrl, user);
  }

  update(user: User){
    return this.http.put(this.baseUrl + user.id, user);
  }

  delete(user : User){
    return this.http.delete(this.baseUrl + user.id);
  }

}
