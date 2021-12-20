import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from 'src/utilities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http : HttpClient) { }
  products: Product[] = [];
  getProductsfromDB(){

    return this.http.get<Product[]>("https://foodord-backend20211220023942.azurewebsites.net/api/Products",{ headers: {Authorization: "Bearer "+ window.localStorage.getItem("access-token") || ""}});
  }

}
