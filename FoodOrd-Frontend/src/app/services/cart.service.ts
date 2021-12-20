import { Injectable } from '@angular/core';
import Order from 'src/utilities/order';
import Product from 'src/utilities/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Product[] = [];
  orders : Order[] = [];
  order: any;

  constructor() { }
  addToCart(item: Product){
    this.cart.push(item)
  }
  addOrder(id : number){
    this.order = new Order(id);
    this.order.startTimer()
    this.orders.push(this.order)
    this.cart=[]
    console.log(this.orders)
  }
  reset(){
    this.cart = []
    this.orders = []
    this.order = null
  }
}
