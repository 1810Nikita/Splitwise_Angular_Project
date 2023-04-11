import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent {

  inviteForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  /**
    * Create the example form with the following fields:
    * name: a required field for entering the name of the user
    * email: a required field for entering the email of the user
    * phone: an optional field for entering the phone number of the user
    * skills: an array of skills that the user has, which includes at least one skill by default
    * @return void
    */
  ngOnInit(): void {
    // Initialize the inviteForm FormGroup with a FormArray of names and a message
    this.inviteForm = this.fb.group({
      names: this.fb.array([this.createNameInput()]),
      message: ['']
    });
  }

  /**
   * This function creates a new skill form group, which includes:
   * - name: a required field for entering the name of the skill
   * - level: a required field for selecting the level of proficiency for the skill
   * This is used when adding a new skill to the array of skills that the user has.
   * @param none
   * @return void
  */
  createNameInput(): FormGroup {
    return this.fb.group({
      name: ['']
    });
  }

  /**
   * This method returns the FormArray of names from the inviteForm FormGroup
   * @param none
   * @return FormArray
   */
  get names(): FormArray {
    return this.inviteForm.get('names') as FormArray;
  }

  /**
   * This method adds a new name input field to the FormArray
   * @param none
   * @return void
   */
  addNameInput(): void {
    this.names.push(this.createNameInput());
  }

  /** 
   * This method is called when the form is submitted 
   * @param index index to be deleted
   * @return void
   */
  deleteNameInput(index: number): void {
    this.names.removeAt(index);
  }

  /**
   * This function is called when the example form is submitted.
   * It handles form submission and navigates to the example list page.
   * @return void
  */
  onSubmit(): void {
    alert('Invitation send successfully');
  }

  /**
   *  This function is called when the cancel button is clicked.
   * It navigates back to the example list page.
   * @return void
  */
  closeForm(): void {
    // Navigate to the dashboard route
    this.router.navigate(['/dashboard']);
  }
}