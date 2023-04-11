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

  ngOnInit() {
    // Create the expense form with required fields
    this.expenseForm = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      people: this.formBuilder.array([ this.createPerson() ])
    });
  }

  //for adding person
  createPerson(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  // Get the array of people from the expense form
  get people(): FormArray {
    return this.expenseForm.get('people') as FormArray;
  }

  // Add a new person to the array of people
  addPerson(): void {
    this.people.push(this.createPerson());
  }

  // Remove a person from the array of people
  removePerson(index: number): void {
    this.people.removeAt(index);
  }

  //after submission it shows the expense list
  onSubmit(): void {
    // handle form submission
    this.router.navigate(['expense/expense-list']);
  }

  // Navigate back to dashboard when the close button is clicked
  closeForm(): void {
    this.router.navigate(['/dashboard']);

  }  
}
