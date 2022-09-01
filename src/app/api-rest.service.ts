import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) {

  }

  login() {
    return this.http.get('http://172.17.123.57/foro-rest-final/public/', {
      params: { username: 'admin', password: '123' }
    })
  }
}
