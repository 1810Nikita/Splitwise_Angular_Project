import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from 'src/app/model/friend.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {

  constructor(private router: Router){};

  /**
   * An array of Friend objects representing the list of friends.
   * Each Friend object contains the name, email, and amount owed/owing.
   */
  friends: Friend[] = [
    { name: 'John', email: 'john@example.com', amountYouOwe: 0, amountFriendOwes: 0 },
    { name: 'Jane', email: 'jane@example.com', amountYouOwe: 0, amountFriendOwes: 0 },
    { name: 'Bob', email: 'bob@example.com', amountYouOwe: 0, amountFriendOwes: 0 },
  ];

  /**
   * Handles the click event of the delete button and removes the corresponding friend from the friends array.
   * @param friend - The Friend object to be removed.
   * @returns void 
   */
  onDelete(friend: Friend): void {
    const index = this.friends.indexOf(friend);
    if (index !== -1) {
      this.friends.splice(index, 1);
    }
  }

  /**
   * Navigates to the settle up page for the selected friend.
   * @param friend - The Friend object for which the settle up page needs to be displayed.
   * @returns void.
   */
  onSettleUp(friend: Friend): void {
    this.router.navigate(['/settle-up']);
  }
}
