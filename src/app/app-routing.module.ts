import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettleUpComponent } from './settle-up/settle-up.component';

const routes: Routes = [
  {path:'login-signup', loadChildren:()=> import('./login-signup/login-signup.module')
  .then(m=> m.LoginSignupModule)},

  {path:'group', loadChildren:()=> import('./group/group.module')
  .then(mod=> mod.GroupModule)},

  {path:'expense', loadChildren:()=> import('./expenses/expenses.module')
  .then(mod=> mod.ExpensesModule)},

  {path:'friend', loadChildren:()=> import('./friend/friend.module')
  .then(mod=> mod.FriendModule)},
  
  {path: 'dashboard', component:DashboardComponent},

  {path: 'settle-up', component:SettleUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
