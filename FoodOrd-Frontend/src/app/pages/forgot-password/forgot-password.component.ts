import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'food-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm = new FormGroup({
    email : new FormControl("", [Validators.required,Validators.email]),
  })
  success : string = "";
  constructor(private user : UserService, private router : Router) { }

  ngOnInit(): void {
  }
  get email(){
    return this.emailForm.get("email");
  }
  handlerEmailForm(){
    this.router.navigateByUrl("/homepage")
  }

}
