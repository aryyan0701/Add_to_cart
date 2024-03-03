import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsKey = 'cartItems';
  private cartItems: any[] = JSON.parse(localStorage.getItem(this.cartItemsKey) as string) || [];

  constructor(private messageService: MessageService){}

  addToCart(product: any) {
    this.cartItems.push({...product,quantity:1 });
    this.saveCartItems();
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product successfully added to your cart.',
    });
  }

  getItems(){
    return this.cartItems;
  }

  delete(item:any){
    this.cartItems = this.cartItems.filter((i)=> i.id!== item.id)
    this.saveCartItems();
  }

  incrementQuantity(id: number){
    let item= this.cartItems.find((i)=>i.id===id)
    if(item){   
      item.quantity++;
      this.saveCartItems();
    }
  }

  decrementQuantity(id: number){
    let item= this.cartItems.find((i)=>i.id===id)
    if(item){
      item.quantity--;
      if (item.quantity === 0) {
        this.delete(item);
      } else {
        this.saveCartItems();
      }
    }
  }

  getTotal(){
    return this.cartItems.reduce((acc, item)=>{
      return acc + item.price * item.quantity;
    },0)
  }

  private saveCartItems() {
    localStorage.setItem(this.cartItemsKey, JSON.stringify(this.cartItems));
  }


}



