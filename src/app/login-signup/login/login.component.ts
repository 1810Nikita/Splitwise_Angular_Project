
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/model/loginRegister.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  signupUsers: User[];

  constructor(private router: Router) {
    this.signupUsers = [];
   }

  ngOnInit():void {
    const localData = localStorage.getItem('signupUsers');
    if(localData !== null) {
      this.signupUsers=JSON.parse(localData);
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  /**
   * This function is called when the user logs in.
   * It performs the necessary actions to authenticate the user
   * and redirect them to the appropriate page.
  */
  onLogin(): void {
    // code to authenticate the user
    const username:string = this.loginForm.get('username')?.value;
    const password:string = this.loginForm.get('password')?.value;
    const isUserExist = this.signupUsers.find(m => m.username === username && m.password === password);
    if(isUserExist !== undefined) {
      alert('user logged in successfully');
    } else{
      alert('user not found please Register');
    }
    this.router.navigateByUrl('/home')
  }
  
  /**
    * Navigates to the registration page.
    * This function uses the Angular Router service to navigate to the
    * 'login-signup/register' route, which displays the registration form.
  */
  navigateToRegister(): void {
    this.router.navigate(['login-signup/register']);
  }
}
