import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpensesComponent } from './expenses.component';

const routes: Routes = [
  {path:'add-expense', component:AddExpensesComponent},
  {path:'expense-list', component:ExpenseListComponent},
  { path: '',component: AddExpensesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
