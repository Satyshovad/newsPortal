import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService, UserService]
})
export class HomeComponent implements OnInit {
  toDate: Date = new Date();
  userValue: string;
  ival = false;

  constructor(private userService: UserService) {
    this.userValue = this.userService.getValue();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  show1() {
    this.ival = !this.ival;
  }
}
