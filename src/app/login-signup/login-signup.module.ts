import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginSignupComponent } from './login-signup.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginSignupComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginSignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginSignupModule { }
