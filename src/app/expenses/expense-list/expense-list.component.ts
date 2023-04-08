import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {

  constructor(private router: Router){};

  expenses: Expense[] = [
    { description: 'Rent', amount: 1000, people: ['John', 'Jane'] },
    { description: 'Groceries', amount: 200, people: ['John', 'Jane', 'Bob'] },
    { description: 'Dinner', amount: 50, people: ['Bob'] },
  ];

  //Function to handle edit button click and navigate to the expense edit form
  editExpense(expense: Expense) {
    this.router.navigate(['/expense/add-expense']);
  }

  //Function to handle delete button click and remove the expense from the expenses array
  deleteExpense(expense: Expense) {
    const index = this.expenses.indexOf(expense);
    if (index !== -1) {
      this.expenses.splice(index, 1);
    }
  }
}
