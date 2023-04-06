import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  expenseForm !: FormGroup;
  showForm: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.showForm = true;
   }

  ngOnInit() {
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

  get people(): FormArray {
    return this.expenseForm.get('people') as FormArray;
  }

  addPerson(): void {
    this.people.push(this.createPerson());
  }

  //remove person
  removePerson(index: number): void {
    this.people.removeAt(index);
  }

  onSubmit() {
    // handle form submission
  }

  //close button for form
  closeForm() {
    this.showForm = false;
  }
}
