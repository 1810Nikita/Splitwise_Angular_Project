import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  groupForm!: FormGroup;
  groupMembers!: FormArray;
  groupType: string[] = ['Home', 'Trip', 'Couple', 'Other'];
  showGroupMembersForm: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.showGroupMembersForm = false;
  }

  /**
    * Initializes the component with an empty Group form.
    * This function is automatically called by Angular when the component is created.
    * The form controls are defined using the Reactive Forms API.
  */
  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      groupName: ['', Validators.required],
      type: ['Home', Validators.required],
      groupMembers: this.formBuilder.array([])
    });

    this.groupMembers = this.groupForm.get('groupMembers') as FormArray;
    this.addGroupMember();

    // Listen to changes in the groupName FormControl
    this.groupForm.get('groupName')?.valueChanges.subscribe(groupName => {
      this.showGroupMembersForm = (groupName && groupName.length > 0);
    });
  }

  /**
   * Handles the add group member button
   *  The FormGroup contains two FormControls: name and email. 
   * The name control is required and the email control is required and must be a valid email.
   */
  addGroupMember(): void {
    this.groupMembers.push(this.formBuilder.group({
      name: '',
      email: ''
    }));
  }

  removeGroupMember(index: number) {
    this.groupMembers.removeAt(index);
  }

  /**
    *This function is triggered when the user clicks the "Save" button to save the group data.
    *It logs the form value to the console and can be modified to call an API or service to save the group data.
  */
    saveGroup(): void {
      //console.log(this.groupForm.value);
      // call API or service to save group data  
      // Navigate to the group-list page
      this.router.navigate(['/group-list']);
    } 

    onclick(): void {
      this.router.navigate(['group/group-list']);
    }
 

 
}
