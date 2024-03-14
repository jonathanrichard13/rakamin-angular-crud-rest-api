import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  islogin:BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private http:HttpClient) { }
  login(username:string, password:string){
    this.http.post('https://dummyjson.com/auth/login', {username, password}).subscribe((data: any)=>{
      this.saveTokenToLocalStorage(data.token)
    })
  }

  private saveTokenToLocalStorage(token: string) {
    localStorage.setItem("davit",token)
  }

}
