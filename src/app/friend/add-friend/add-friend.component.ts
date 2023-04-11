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

  // This method is called when the component is initialized
  ngOnInit(): void {
    // Initialize the inviteForm FormGroup with a FormArray of names and a message
    this.inviteForm = this.fb.group({
      names: this.fb.array([this.createNameInput()]),
      message: ['']
    });
  }

  // This method returns a new FormGroup with a name field
  createNameInput(): FormGroup {
    return this.fb.group({
      name: ['']
    });
  }

  // This method returns the FormArray of names from the inviteForm FormGroup
  get names(): FormArray {
    return this.inviteForm.get('names') as FormArray;
  }

  // This method adds a new name input field to the FormArray
  addNameInput(): void {
    this.names.push(this.createNameInput());
  }

  // This method is called when the form is submitted
  deleteNameInput(index: number): void {
    this.names.removeAt(index);
  }

  // This method is called when the user clicks the close button
  onSubmit(): void {
    alert('Invitation send successfully');
  }

  closeForm(): void {
    // Navigate to the dashboard route
    this.router.navigate(['/dashboard']);
  }
}