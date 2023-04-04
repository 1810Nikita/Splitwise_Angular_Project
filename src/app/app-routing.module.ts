import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login-signup', loadChildren:()=> import('./login-signup/login-signup.module')
  .then(m=>m.LoginSignupModule)},

  {path:'group', loadChildren:()=> import('./group/group.module')
  .then(mod=>mod.GroupModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
