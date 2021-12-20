import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import Product from 'src/utilities/product';

@Component({
  selector: 'food-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products : Product[] = [];

  searchText: string = "";
  constructor(private productService : ProductService, private cartService : CartService) { }

  ngOnInit(): void {
    this.productService.getProductsfromDB().subscribe((data : Product[])=>{
      console.log(data);
      this.products = this.products.concat(data);
      console.log("after concat" + this.products)
    })
  }
  addToCart(item:Product){
    this.cartService.addToCart(item)
    console.log(this.cartService.cart)
  }

}
