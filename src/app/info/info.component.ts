import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {LoggingService} from '../services/logging.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [LoggingService, UserService]
})
export class InfoComponent implements OnInit {

  toDate: Date = new Date();
  otherPosts: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  show() {
    this.otherPosts = !this.otherPosts;
  }
}
