import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IDeactivateComponent} from '../services/contacts-can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {Person} from '../../model/person';

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
  brown = {
    color: 'brown'
};
  person: Person;
  @ViewChild('form')
  personForm: NgForm;

  canExit(): boolean{
    if (window.confirm('Are you sure to leave this page?')){
      return true;
    } else{
      return false;
    }
  }

  // tslint:disable-next-line:typedef
  buttonClick() {
    alert('Thank you, contact us!');
  }

  ngOnInit(): void {
    this.person = new Person(1, '', '', '', '');
    console.log('Person object after init: ', this.person);
  }

  // tslint:disable-next-line:typedef
  example() {
    this.person.firstname = 'Adam';
    this.person.lastname = 'Adamov';
    this.person.email = 'adam_a@gmail.com';
    this.person.tel = '+78771236230';
  }

  // tslint:disable-next-line:typedef
  reset(form: NgForm) {
    form.resetForm();
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    console.log('onSubmit event handled');
    console.log('valid state: ', form.valid);
    console.log(form);
    /*console.log(form.value);*/
    console.log(this.personForm.value);
  }

  // tslint:disable-next-line:typedef
  submit(){
      alert('Thank you! )' + this.person.firstname +' We will get back to you:)' );
  }
}


