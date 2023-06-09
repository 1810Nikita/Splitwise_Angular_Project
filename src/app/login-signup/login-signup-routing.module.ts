import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent} from './register/register.component'
const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: '',component: LoginComponent, pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSignupRoutingModule { }
