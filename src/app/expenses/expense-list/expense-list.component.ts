import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {

  constructor(private router: Router) {}

  //// Array of Expense objects representing the expenses to be displayed
  expenses: Expense[] = [
    { description: 'Rent', amount: 1000, people: ['John', 'Jane'] },
    { description: 'Groceries', amount: 200, people: ['John', 'Jane', 'Bob'] },
    { description: 'Dinner', amount: 50, people: ['Bob'] },
  ];

  // Array of indices of the selected expenses  
  selectedExpenseIndices: number[] = [];
  // Array of strings representing the details for each expense
  expenseDetails: string[] = [];

  /**
   * Toggles the display of the expense details for a given index.
   * If the index is already selected, it removes it from the selected list
   * and clears the corresponding expense details. Otherwise, it adds the index
   * to the selected list and computes the amount owed per person, then updates
   * the expense details with this information.
 */
  toggleDetails(index: number) {
    const isSelected = this.selectedExpenseIndices.includes(index);
    if (isSelected) {
      const selectedIndex = this.selectedExpenseIndices.indexOf(index);
      this.selectedExpenseIndices.splice(selectedIndex, 1);
      this.expenseDetails[index] = '';
    } else {
      this.selectedExpenseIndices.push(index);
      const expense = this.expenses[index];
      const amountOwedPerPerson = this.getAmountOwedPerPerson(expense);
      let amountOwedText = '';
      for (const person in amountOwedPerPerson) {
        amountOwedText += `${person} owes ${amountOwedPerPerson[person]}\n`;
      }
      this.expenseDetails[index] = amountOwedText;
    }
  }
  
  /**
   * getAmountOwedPerPerson method
   * Calculates the amount owed by each person for a given expense
   * @param expense The expense for which to calculate the amount owed by each person
   * @returns An object containing the amount owed by each person
*/
  getAmountOwedPerPerson(expense: Expense): { [key: string]: number } {
    const totalAmount = expense.amount;
    const numPeople = expense.people.length;
    const amountOwedPerPerson = totalAmount / numPeople;
    const amountOwedPerPersonObj: { [key: string]: number } = {};
    for (const person of expense.people) {
      amountOwedPerPersonObj[person] = amountOwedPerPerson;
    }
    return amountOwedPerPersonObj;
  }

  //edit will navigate to add expense form
  editExpense(expense: Expense) {
    this.router.navigate(['/expense/add-expense']);
  }

  //delete will remove the data 
  deleteExpense(expense: Expense) {
    const index = this.expenses.indexOf(expense);
    if (index !== -1) {
      this.expenses.splice(index, 1);
    }
  }
}