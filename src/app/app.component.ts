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
    
    // This line toggles the visibility of the side navigation bar
    this.showSideNav = false;
    // This block of code subscribes to router events and checks the current URL to determine whether to show or hide the side navigation bar
    this.router.events.subscribe((val) => {
      if (this.router.url === '/' || this.router.url === '/login-signup/register' || this.router.url === '/login-signup/login') {
        this.showSideNav = false;
      } else {
        this.showSideNav = true;
      }
    });    
  }

  //lifecycle hook that is called when the component is initialized
  ngOnInit(): void { 
  }

  /**
   * This method is called when the side navigation bar is toggled
   * Set the screen width to the data passed in
   * Set the isSideNavCollapsed property to the data passed in
   */
  onToggleSidenav(data: SideNavToggle): void {
    this.screenWidth =data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;  
  }

  // This method checks whether the current URL starts with the given path
  urlStartsWith(path : string) : boolean {
    return this.router.url.startsWith(path);
  }   
}

  
  

