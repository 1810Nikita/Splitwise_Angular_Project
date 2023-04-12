import { Component, Output, EventEmitter, OnInit, HostListener} from '@angular/core';
import { navbarData } from './navdata';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  /* Define an EventEmitter that emits a SideNavToggle object when the sidenav is toggled */
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  /* Set the initial state of the sidenav to not collapsed,
   and the initial screen width to 0 */
  collapsed = false;
  screenWidth = 0;

  /* Load the navbar data from the imported file */
  navdata = navbarData;

  /* Listen for window resize events, and emit a SideNavToggle object if the screen width is less than
   or equal to 768px */
  @HostListener('window:resize',['$event'])
  onResize(event:any) {
    this.screenWidth =window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});
    }
  }

  /* Set the initial screen width to the current window width */
  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  /* Toggle the collapsed state of the sidenav and emit a SideNavToggle object */
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});

  }

  /* Set the collapsed state of the sidenav to not collapsed and emit a SideNavToggle object */
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth : this.screenWidth});
  }

}



