import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http : HttpClient, private router : Router) { }
  makeRegisterAPIRequest(info : any){
    return this.http.post<any>("https://foodord-backend20211220023942.azurewebsites.net/api/Users/register",{  email : info.email , username: info.name , password : info.password })
 }

 
 makeLoginAPIRequest(info: any){
  return this.http.post<any>("https://foodord-backend20211220023942.azurewebsites.net/api/Users/login",{ email : info.email, password: info.password })
 }
 getUserInfo() : any{
   this.http.get("https://foodord-backend20211220023942.azurewebsites.net/api/Users/whoami", { headers: {token: window.localStorage.getItem("access-token") || ""}})
    .subscribe((response: any) =>{
      console.log(response)
      console.log("in subscribe")
      this.user.next(response.data)
      return this.user
    })
 }
}