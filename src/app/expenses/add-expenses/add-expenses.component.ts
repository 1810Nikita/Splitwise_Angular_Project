import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  expenseForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {};

  /**
   * Create the expense form with required fields, including:
   * description: a required field for entering a description of the expense
   * amount: a required field for entering the amount of the expense
   * people: an array of people who shared the expense, which includes at least one person by default
   * @return void
   */
  ngOnInit(): void {
    this.expenseForm = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      people: this.formBuilder.array([ this.createPerson() ])
    });
  }

  /**
   * This function creates a new person form group, which includes:
   * name: a required field for entering the name of the person
   * This is used when adding a new person to the array of people who shared the expense.
   * @return FormGroup
   */
  createPerson(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  /**
   * Get the array of people from the expense form
   * @param none
   * @return FormArray
   */
  get people(): FormArray {
    return this.expenseForm.get('people') as FormArray;
  }

  /**
   * Add a person to the array of people
   * @param none
   * @return void
   */
  addPerson(): void {
    this.people.push(this.createPerson());
  }

  /**
   * Deletes the person from the array of people
   * @param index the index to be deleted
   * @return void
   */
  removePerson(index: number): void {
    this.people.removeAt(index);
  }

  /** 
   * This function is called when the expense form is submitted.
   * It handles form submission and navigates to the expense list page.
   * @return void
   */
  onSubmit(): void {
    // handle form submission
    this.router.navigate(['expense/expense-list']);
  }

  /**
   * This function is called when the close button is clicked.
   * It navigates back to the dashboard page.
   * @return void
   */
  closeForm(): void {
    this.router.navigate(['/dashboard']);
  }  
}
