
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[gteValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: GteDirective, multi: true}]
})
export class GteDirective implements Validator {

  // tslint:disable-next-line:typedef
  validate(control: FormControl) {
    console.log('GteDirective validator method: ', control.value);

    const v: number = +control.value;

    if (v === null || v === undefined) {
      return { gte: true, requiredValue: 10 };
    }

    if (v <= +10) {
      return { gte: true, requiredValue: 10 };
    }

    return null;
  }
}
