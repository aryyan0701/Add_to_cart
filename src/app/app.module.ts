import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { ProductComponent  } from './components/product/product.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CartComponent } from './components/cart/cart.component';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineModule } from 'primeng/timeline';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ToastModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule,
    MessagesModule ,
    BrowserAnimationsModule,
    TimelineModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
