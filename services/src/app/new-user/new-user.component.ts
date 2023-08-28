import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})

export class NewUserComponent {

  constructor(private userService: UserService) {
    this.userService.statusUpdate.subscribe(
      (status: string) =>  alert('Novo Status: ' + status )
    );
  }

  onCreateUser(userName: string, userStatus: string) {
    this.userService.createUser(userName, userStatus);
  }

}
