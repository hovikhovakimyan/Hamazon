
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import CompareValidator from 'src/app/utilities/confirm-password-validator';

@Component({
  selector: 'food-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm = new FormGroup({
    name : new FormControl("", [Validators.required]),
    email : new FormControl("", [Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required, Validators.minLength(6)]),
    confirmPassword : new FormControl("", Validators.required)
  },[CompareValidator("password","confirmPassword")])

  success : string = "";
  constructor(private user : UserService, private router : Router) { }

  ngOnInit(): void {
  }
  handlerRegisterForm(){
    this.user.makeRegisterAPIRequest(this.registerForm.value).subscribe(
      (response)=>{
        console.log(response)
        this.router.navigateByUrl("/login")
      },
      (err)=>{
        this.success = err.error.message
    })
  }
  get name(){
    return this.registerForm.get("name");
  }
  get email(){
    return this.registerForm.get("email");
  }
  get password(){
    return this.registerForm.get("password");
  }

  get confirmPassword(){
    return this.registerForm.get("confirmPassword");
  }
 
}
