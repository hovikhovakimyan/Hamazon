import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'food-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-ord';

  constructor(private userService : UserService, private productService : ProductService){ }
  ngOnInit(){
    this.userService.getUserInfo()
  }
}
