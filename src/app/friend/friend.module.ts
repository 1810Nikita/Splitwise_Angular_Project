import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendComponent } from './friend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddFriendComponent,
    FriendListComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    FriendRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FriendModule { }
