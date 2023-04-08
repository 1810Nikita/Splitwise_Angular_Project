import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent {

  inviteForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inviteForm = this.fb.group({
      names: this.fb.array([this.createNameInput()]),
      message: ['']
    });
  }

  createNameInput(): FormGroup {
    return this.fb.group({
      name: ['']
    });
  }

  get names(): FormArray {
    return this.inviteForm.get('names') as FormArray;
  }

  addNameInput(): void {
    this.names.push(this.createNameInput());
  }

  deleteNameInput(index: number): void {
    this.names.removeAt(index);
  }

  onSubmit(): void {
    alert('Invitation send successfully');
  }
}