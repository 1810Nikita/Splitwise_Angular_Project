import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomePageComponent } from './home-page/home-page.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    BodyComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    
    

  ]
})
export class HomeModule { }
