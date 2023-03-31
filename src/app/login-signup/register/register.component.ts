import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registrationForm!: FormGroup;
  signupUsers:any[] =[];
  signupObj:any ={
    username: '',
    password: '',
    confirmPassword:''
  }

  constructor (){ }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }
  onRegister() {
    this.signupObj = {
      username: this.registrationForm.value.username,
      password: this.registrationForm.value.password,
      confirmPassword: this.registrationForm.value.confirmPassword
    };
  
    this.signupUsers.push(this.signupObj);
    //console.log(this.signupUsers);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      password: '',
      confirmPassword:''

    }
    alert('registered successfully')
  }
  
  
  
}
