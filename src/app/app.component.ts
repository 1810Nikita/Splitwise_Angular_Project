import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splitwise';
  // Declare showLoginButton property
  showLogin: boolean;
  isSideNavCollapsed: boolean;
  screenWidth = 0;
  showSideNav: boolean;
  currentRoute!: string;
  
  constructor(private router: Router) {

    this.isSideNavCollapsed = false;
    // Initialize showLoginButton property to true
    this.showLogin = true;
    this.router.events.subscribe((val) => {
      if (this.router.url === '/') {
        this.showLogin = true;
      } else {
        this.showLogin = false;
      }
    });
    
    this.showSideNav = false;
    this.router.events.subscribe((val) => {
      if (this.router.url === '/' || this.router.url === '/login-signup/register' || this.router.url === '/login-signup/login') {
        this.showSideNav = false;
      } else {
        this.showSideNav = true;
      }
    });    
  }

  ngOnInit(): void { 
  }

  onToggleSidenav(data: SideNavToggle): void {
    this.screenWidth =data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;  
  }

  urlStartsWith(path : string) : boolean {
    return this.router.url.startsWith(path);
  }   
}

  
  

