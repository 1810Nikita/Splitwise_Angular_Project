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

  //array of friend
  friends: Friend[] = [
    { name: 'John', email: 'john@example.com', amountYouOwe: 0, amountFriendOwes: 0 },
    { name: 'Jane', email: 'jane@example.com', amountYouOwe: 0, amountFriendOwes: 0 },
    { name: 'Bob', email: 'bob@example.com', amountYouOwe: 0, amountFriendOwes: 0 },
  ];

  //Function to handle delete button click and remove the friend from the friends array
  onDelete(friend: Friend): void {
    const index = this.friends.indexOf(friend);
    if (index !== -1) {
      this.friends.splice(index, 1);
    }
  }

  //go to settle up
  onSettleUp(friend: Friend): void {
    this.router.navigate(['/settle-up']);
  }
}
