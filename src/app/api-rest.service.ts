import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

const URL = "https://devel.cdhidalgo.tecnm.mx/~iraic/foro-rest"; 


interface User {
  id: 0, 
  username: String, 
  role: String, 
}

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private user: User = { id: 0, username: '', role: ''}; 

  private userObs = new BehaviorSubject<User>(this.user); 
  userObs$ = this.userObs.asObservable

  constructor(private http: HttpClient) {

  }

  setUser(user: User) {
    this.user = user; 
  }

  getUser(): User {
    return this.user; 
  }

  login(username: String,  password: String) {
    return this.http.get(`${URL}/login`, {
      params: { username: `${username}`, password: `${password}` }
    })
  }
}
