import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IDeactivateComponent} from '../services/contacts-can-deactivate-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, IDeactivateComponent {
  @ViewChild('Form') public createForm: NgForm;
  constructor() { }
  title = 'Contacts';
  iText = 'Informburo';
  myStyle = {
    color: 'brown'
};

  canExit(): boolean{
    if (window.confirm('Are you sure to leave this page?')){
      return true;
    } else{
      return false;
    }
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  buttonClick() {
     alert('Thank you, contact us!');
  }
}


