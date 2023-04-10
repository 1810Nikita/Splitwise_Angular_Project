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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.showSettleUpForm = false;
  };

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
  */ 
  toggleForm() {
    this.showSettleUpForm = !this.showSettleUpForm;
  }

  //submit the form
  onSubmit() {
    // handle form submission
    alert('Payment done successfully.');
  }

  // Navigate back to dashboard when the close button is clicked
  closeForm() {
    this.router.navigate(['/dashboard']);
  }  
}

