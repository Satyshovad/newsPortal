/*import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export class ContactGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    return confirm('Are you sure?');
  }
}*/

/*import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
export interface ContactsComponent{
  CanDeactivate: () => boolean | Observable<boolean>;
}

export class ContactGuard implements CanDeactivate<ContactsComponent>{
  CanDeactivate(component: ContactsComponent): Observable<boolean> | boolean{
    return component.CanDeactivate ? component.CanDeactivate() : true;
  }
}*/
