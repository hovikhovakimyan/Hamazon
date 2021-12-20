import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'food-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl("", [Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required]),
  })
  success : string = "";
  constructor(private user : UserService, private router : Router) { }

  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.get("email");
  }
  get password(){
    return this.loginForm.get("password");
  }
  handlerLoginForm(){
    this.user.makeLoginAPIRequest(this.loginForm.value)
      .subscribe(
        (response)=>{
        console.log("response" + response)
        this.success = response.status
        console.log("success:" + this.success)
        if(this.success==="success"){
          this.router.navigateByUrl("/homepage")
          window.localStorage.setItem("access-token", response?.token)
          this.user.getUserInfo()
        }
      },
        (err)=>{
          this.success = err.error.message
      })
  }

}
