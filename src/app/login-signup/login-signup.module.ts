import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginSignupComponent } from './login-signup.component';
//import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginSignupComponent,
    //LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginSignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginSignupModule { }
