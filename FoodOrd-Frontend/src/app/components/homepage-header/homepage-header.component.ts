import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'food-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.css']
})
export class HomepageHeaderComponent implements OnInit {
  cartItems: any[] = []
  constructor(private router : Router, private cartService: CartService, private productService: ProductService, private userService : UserService) { 
    this.cartItems =  this.cartService.cart
  }
  ngOnInit(): void {
  }
  LogOut(){
    window.localStorage.removeItem("access-token")
    this.cartService.reset()
    this.router.navigateByUrl("/login")
  }

}
