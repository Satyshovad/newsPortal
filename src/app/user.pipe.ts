import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textSize'
})

export class UserPipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    const actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}

