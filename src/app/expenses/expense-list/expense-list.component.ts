import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {

  expenses: Expense[] = [
    { description: 'Rent', amount: 1000, people: ['John', 'Jane'] },
    { description: 'Groceries', amount: 200, people: ['John', 'Jane', 'Bob'] },
    { description: 'Dinner', amount: 50, people: ['Bob'] },
  ];

  editExpense(expense: Expense) {
    // Implement edit logic here
  }

  deleteExpense(expense: Expense) {
    const index = this.expenses.indexOf(expense);
    if (index !== -1) {
      this.expenses.splice(index, 1);
    }
  }
}
