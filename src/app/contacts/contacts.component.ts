import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor() { }
  title = 'Contacts';
  iText = 'Informburo';
  myStyle = {
    color: 'brown'
};

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  buttonClick() {
     alert('Thank you, contact us!');
  }
}
