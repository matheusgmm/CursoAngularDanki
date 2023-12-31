import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users!: { name: string, status: string }[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.users = this.userService.users
  }

}