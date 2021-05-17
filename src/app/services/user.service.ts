import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from '../../model/person';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) {
  }
  url = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // tslint:disable-next-line:typedef
  isAdmin(){
    return true;
  }
  getPersons(): Observable<Person> {
    return this.http.get<Person>(this.url + '/person')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getPerson(id): Observable<Person> {
    return this.http.get<Person>(this.url + '/person/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createComment(person): Observable<Person> {
    return this.http.post<Person>(this.url + '/person', JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}


