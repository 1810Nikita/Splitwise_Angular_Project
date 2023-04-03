import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splitwise';
  // Declare showLoginButton property
  showLoginButton: boolean;
  constructor(private router: Router) {
    // Initialize showLoginButton property to true
    this.showLoginButton = true;
    this.router.events.subscribe((val) => {
      if (this.router.url === '/') {
        this.showLoginButton = true;
      } else {
        this.showLoginButton = false;
      }
    });
  }
  
}
