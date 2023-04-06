import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'login-signup', loadChildren:()=> import('./login-signup/login-signup.module')
  .then(m=> m.LoginSignupModule)},

  {path:'group', loadChildren:()=> import('./group/group.module')
  .then(mod=> mod.GroupModule)},

  {path:'expense', loadChildren:()=> import('./expenses/expenses.module')
  .then(mod=> mod.ExpensesModule)},
  
  {path:'home', loadChildren:()=> import('./home/home.module')
  .then(mod=> mod.HomeModule)},

  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
