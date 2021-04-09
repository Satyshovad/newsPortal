import {ContactsComponent} from '../contacts/contacts.component';
import {CanDeactivate} from '@angular/router';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactsCanDeactivateGuardService implements CanDeactivate<ContactsComponent>{
  constructor() { }

  canDeactivate(component: ContactsComponent): boolean {
    return confirm('Are you sure to leave this page?');
  }
}
