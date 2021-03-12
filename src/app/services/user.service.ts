import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()

export class UserService {

  constructor(private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getValue(){
    let userValue: string;
    userValue = 'This is shared message';
    this.loggingService.log('Shared value: ' + userValue);
    return userValue;
  }
}


