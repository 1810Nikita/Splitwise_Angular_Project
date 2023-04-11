import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  //Input property that determines whether the body element should be collapsed or not
  @Input() collapsed = false;
  // Input property that holds the width of the screen
  @Input() screenWidth = 0;
  
  /**
   * Method that determines the CSS class to be applied to the body element.
   * It checks the values of the input properties "collapsed" and "screenWidth"
   * and returns the appropriate CSS class to be applied to the body element.
   *
   * @returns The CSS class to be applied to the body element.
  */
  getBodyClass(): string {
    let styleClass = '';
    /**
     * Initialize the CSS class to an empty string
     * If the body should be collapsed and the screen width is greater than 600 pixels,
     * set the CSS class to "body-trimmed"
    */
    if(this.collapsed && this.screenWidth > 600) {
      styleClass = 'body-trimmed';
    /**
     * If the body should be collapsed and the screen width is less than or equal to 600 pixels
     * and greater than 0 pixels, set the CSS class to "body-md-screen"
    */
    }else if(this.collapsed && this.screenWidth <= 600 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    // Return the CSS class to be applied to the body element
    return styleClass;
  }

}
