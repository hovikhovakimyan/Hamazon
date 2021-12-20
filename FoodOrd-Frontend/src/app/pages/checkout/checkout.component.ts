import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Product from 'src/utilities/product';

@Component({
  selector: 'food-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart : Product[] = [];
  total : number = 0;
  orderNumber = 1;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart
    this.cart.forEach((value) =>{
      this.total+=parseFloat(value.price)
    })
  }
  placeOrder(){
    alert("Your order has been placed")
    this.cartService.addOrder(this.orderNumber)
    this.orderNumber++
  }

}
