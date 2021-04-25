import {ContactsComponent} from '../contacts/contacts.component';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface IDeactivateComponent{
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
  export class ContactsCanDeactivateGuardService implements CanDeactivate<ContactsComponent> {
    component: object;
    route: ActivatedRouteSnapshot;

    constructor() {
    }

    canDeactivate(component: IDeactivateComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean>|Promise<boolean> | boolean {

      return component.canExit ? component.canExit() : true;
    }
}
