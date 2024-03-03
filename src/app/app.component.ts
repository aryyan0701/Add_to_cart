import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideContent: boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events to detect navigation end
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the user navigated to the product page
        if (event.url.includes('/product') || event.url.includes('/cart')) {
          // Set hideContent to true to hide the content
          this.hideContent = true;
        } 
        else {
          // Set hideContent to false for other pages
          this.hideContent = false;
        }
      }
    });
  }

  navigateToProduct(){
    this.router.navigate(["product"])
  }
}
