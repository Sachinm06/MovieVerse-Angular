import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }


  send(uname: any, review: any) {
    const data = { uname, review }
    console.log(data);
    localStorage.setItem("user", data.uname)
    localStorage.setItem("review", data.review)


    return this.http.post('http://localhost:3000/send', data)
  }


}
