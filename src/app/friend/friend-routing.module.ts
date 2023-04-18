import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { FriendListComponent } from './friend-list/friend-list.component';

const routes: Routes = [
  {path:'add-friend', component:AddFriendComponent},
  {path:'friend-list', component:FriendListComponent},
  { path: '',component: AddFriendComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
