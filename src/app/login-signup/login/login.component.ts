
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  signupUsers:any[] =[];

  constructor(private router: Router) { }

  ngOnInit() {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null) {
      this.signupUsers=JSON.parse(localData)
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLogin() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const isUserExist = this.signupUsers.find(m => m.username == username && m.password == password);
    if(isUserExist != undefined) {
      alert('user logged in successfully')
    } else{
      alert('user not found please Register')
    }
  }

  navigateToRegister() {
    this.router.navigate(['login-signup/register']);
  }
    

}












  
  
  


