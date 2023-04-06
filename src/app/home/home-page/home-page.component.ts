import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';




interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed=false;
  navdata = navbarData;
  screenWidth = 0;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});

  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});
  }

}
