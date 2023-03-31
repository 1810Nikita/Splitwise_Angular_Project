
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// an interface that contains the properties of username and password.
interface User {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  signupUsers: User[] =[];

  constructor(private router: Router) {
    this.signupUsers = [];
   }

  ngOnInit():void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null) {
      this.signupUsers=JSON.parse(localData);
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLogin(): void {
    const username:string = this.loginForm.get('username')?.value;
    const password:string = this.loginForm.get('password')?.value;
    const isUserExist = this.signupUsers.find(m => m.username === username && m.password === password);
    if(isUserExist !== undefined) {
      alert('user logged in successfully');
    } else{
      alert('user not found please Register');
    }
  }
  //navigate to register page
  navigateToRegister():void {
    this.router.navigate(['login-signup/register']);
  }
}
