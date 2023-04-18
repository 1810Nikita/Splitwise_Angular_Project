import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settle-up',
  templateUrl: './settle-up.component.html',
  styleUrls: ['./settle-up.component.scss']
})
export class SettleUpComponent implements OnInit {
  settleUpForm !: FormGroup;
  showSettleUpForm: boolean;

  /**
    * Constructor for the SettleUpComponent
    * @param formBuilder The form builder service
    * @param router The router service
    */
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.showSettleUpForm = false;
  };

  /**
   * OnInit method for the SettleUpComponent.
   * Creates the form group for the settle up form with required fields. 
   */
  ngOnInit() {
    // Create the expense form with required fields
    this.settleUpForm = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }
  
 /**
  * opens the cash payment form after click on the button
  * close the form on double click on button
  * @return void
  */ 
  toggleForm(): void {
    this.showSettleUpForm = !this.showSettleUpForm;
  }

  /**
   * Submit a settle up form and show alert
   * @param none
   * @returns void
   */
  onSubmit(): void {
    // handle form submission
    alert('Payment done successfully.');
  }

  /**
   * Navigate back to dashboard when the close button is clicked
   * @param none
   * @return void
   */
  closeForm(): void {
    this.router.navigate(['/dashboard']);
  }  
}
