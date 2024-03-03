import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent {
  cartService = inject(CartService)
  Products: any[] = [  // Change 'Product' to 'Products'
    {
      name: 'Nike Air Jordan 1 Vivid Green Lows',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMO207Yk8N_PvP8jIiyEdDQZGtHHXJ6Jn4nw&usqp=CAU',
      price: 1200,
      dec:" A classic Air Jordan Wings logo embossed on the heel finishes it off.",
      id: 1,
    },
    {
      name: 'Nike Air Jordan 4 Retro Older shoes',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm8zTI-UH_SLcYRZ2rxKEdTHr9RT5TnlPmg&usqp=CAU',
      price: 1800,
      dec:" A classic Air Jordan Wings logo embossed on the heel finishes it off.",
      id: 2,
    },
    {
      name: 'Nike Air Jordan 1 Low new Emerald',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnol54bbCUSYyIZDoFqpdgsGldDcJjBtnr-w&usqp=CAU',
      price: 1600,
      dec:" A classic Air Jordan Wings logo embossed on the heel finishes it off.",
      id: 3,
    },
  ];

  

  constructor(private router: Router) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  navigateToCart() {
    this.router.navigate(['cart']);
  }
}