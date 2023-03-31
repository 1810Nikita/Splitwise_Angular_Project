import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// an interface that contains the properties of username ,name, confirm password and password.
interface User {
  username: string,
  name:string,
  password:string,
  confirmPassword:string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  registrationForm!: FormGroup;
  signupUsers:User[] =[];
  signupObj:User ={
    username: '',
    name:'',
    password: '',
    confirmPassword:''
  }

  constructor (){
    this.signupUsers =[];
   }

  //OnInit used for binding
  ngOnInit():void {
    this.registrationForm = new FormGroup({
      username: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }
  //onRegister function of Register button
  onRegister():void {
    this.signupObj = {
      username: this.registrationForm.value.username,
      name: this.registrationForm.value.name,
      password: this.registrationForm.value.password,
      confirmPassword: this.registrationForm.value.confirmPassword
    };

    //push the array data to local storage
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      name: '',
      password: '',
      confirmPassword:''
    }
    alert('registered successfully')
  }  
}
