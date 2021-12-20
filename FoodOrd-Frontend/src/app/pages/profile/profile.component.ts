import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'food-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user.subscribe(
      (userData)=>{
        this.user=userData
      })
  }

}
