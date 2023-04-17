import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginSignupComponent } from './login-signup.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginSignupComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    LoginSignupRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginSignupModule { }
