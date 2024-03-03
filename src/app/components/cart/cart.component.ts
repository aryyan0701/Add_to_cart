import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  events: any[] = [];   
  
  isCartEmpty: boolean = true;

  checkCartEmpty() {
    this.isCartEmpty = this.cartService.getItems().length === 0;
  }
  
  constructor(public  cartService: CartService, private router: Router) {
    this.checkCartEmpty(); // Check cart emptiness when the component is initialized
  }

  navigateToProductList() {
    this.router.navigate(['/product']); // Adjust the route as per your application
  }

  deleteFromcart(item:any){
     this.cartService.delete(item);
     this.checkCartEmpty();
  }

  calculateTotal(): number {
    return this.cartService.getTotal();
  }

}
