import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    isSideNavCollapsed = false;
    screenWidth = 0;
  
    onToggleSidenav(data: SideNavToggle): void {

      this.isSideNavCollapsed = data.collapsed;
      this.screenWidth = data.screenWidth;
    }
}
