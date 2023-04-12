import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExpensesComponent,
    AddExpensesComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExpensesModule { }
