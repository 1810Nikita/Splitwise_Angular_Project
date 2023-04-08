import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/loginRegister.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  registrationForm!: FormGroup;
  signupUsers:User[];
  signupObj:User ={
    username: '',
    name:'',
    password: '',
    confirmPassword:''
  }

  constructor ( private router : Router){
    this.signupUsers =[];
   }
  
  /**
    * Initializes the component with an empty registration form.
    * This function is automatically called by Angular when the component is created.
    * The form controls are defined using the Reactive Forms API.
  */
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }
  /**
   * Handles the 'Register' button click event.
   * Reads the input values from the registration form and creates a new user object.
   * The user object is added to an array and stored in local storage.
   * Finally, a success message is displayed in an alert box.
   */
  onRegister(): void {
    // Read input values from the registration form
    this.signupObj = {
      username: this.registrationForm.value.username,
      name: this.registrationForm.value.name,
      password: this.registrationForm.value.password,
      confirmPassword: this.registrationForm.value.confirmPassword
    };

    // Add the new user object to the array of registered users and store it in local storage.
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));

    // Reset the form and display a success message
    this.signupObj = {
      username: '',
      name: '',
      password: '',
      confirmPassword:''
    }
    alert('registered successfully')

    this.router.navigateByUrl('/dashboard')
  }  
}
