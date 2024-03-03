import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent } ,
  { path: 'cart', component: CartComponent } ,
  { path: '', redirectTo:'product', pathMatch: 'full' } ,
  { path: '**', redirectTo:'product', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
