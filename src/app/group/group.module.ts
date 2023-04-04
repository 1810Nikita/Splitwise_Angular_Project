import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { AddGroupComponent } from './add-group/add-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddGroupComponent,
    GroupListComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
