
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
  alertSuccess: boolean | undefined;
  alertReject: boolean | undefined;

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

    this.alertSuccess = false;
    this. alertReject = false;
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
      this.alertReject = true;
    } else{
      this.alertSuccess = true;
    }
  }

  /**
   * this function works for closing the alert
   * and after closing the alert it will redirect to the dashboard
   */
  closeAlertSuccess(): void {
    this.alertSuccess = false;
    this.router.navigate(['dashboard']);
  }

  /**
   * this function will close the alert for wrong input
   * and not redirect to any page.
   */
  closeAlertReject(): void {
    this.alertReject = false;
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
