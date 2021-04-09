import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild('Form') public createForm: NgForm;
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
