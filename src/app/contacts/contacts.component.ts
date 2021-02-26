import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title = 'Contacts';
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  buttonClick() {
     alert('Thank you, contact us!');
  }
}
