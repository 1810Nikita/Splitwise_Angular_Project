import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Group } from 'src/app/model/group.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent {

  constructor(private router: Router) {}

  /**
   * Define an array of group objects
   * Define the first group object
   * Define the members of the group
   */
  groups: Group[] = [
    {
      id: 1,
      name: 'Family',
      type: 'Social',
      members: [
        { name: 'John ', email: 'john@example.com' },
        { name: 'Jane ', email: 'jane@example.com' },
        { name: 'Bob ', email: 'bob@example.com' }
      ]
    }
  ];  

  /**
   * direct to add expense page
   * @param none
   * @return void
   */
  onAddExpense(): void {
    this.router.navigate(['/expense/add-expense']);
  }

  /**
   *  Deletes the specified group from the list of groups and emits the
   * updated list as an Observable.
   * @param group The group to delete.
   * @return An Observable that emits the updated list of groups
   */
  onDelete(group: Group): void {
    //functionality for deleting a group
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
