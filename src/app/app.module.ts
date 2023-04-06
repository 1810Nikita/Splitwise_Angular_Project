import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login-signup/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    
   

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
