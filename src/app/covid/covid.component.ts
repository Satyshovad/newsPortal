import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  Person: any = [];
  comment = false;

  constructor(public userService: UserService, public router: Router) {
  }

  title = 'Coronavirus in Kazakhstan';
  @Input() personDetails = {firstname: '', email: '', opinion: ''};

  getTitle(): string {
    return this.title;
  }

  ngOnInit(): void {
    this.loadComment();
    console.log('Covid page');
  }

  // tslint:disable-next-line:typedef
  addPerson() {
    this.userService.createComment(this.personDetails).subscribe((data: {}) => {
      this.router.navigate(['/covid']);
    });
  }

  // tslint:disable-next-line:typedef
  loadComment() {
    return this.userService.getPersons().subscribe((data: {}) => {
      this.Person = data;
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  leaveComment() {
    this.comment = !this.comment;
  }


}
