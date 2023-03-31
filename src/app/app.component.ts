import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splitwise';
  showLoginButton = true;
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/') {
        this.showLoginButton = true;
      } else {
        this.showLoginButton = false;
      }
    });
  }
  
}
