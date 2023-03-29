import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';


@NgModule({
  declarations: [
    ExpensesComponent,
    AddExpensesComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
