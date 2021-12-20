import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Order from 'src/utilities/order';

@Component({
  selector: 'food-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders : Order[] = [new Order(1)]
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.orders = this.cartService.orders
  }
  removeOrder(id: number){
    this.orders.splice(id,1)
  }
}
