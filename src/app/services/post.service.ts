import {Observable, throwError} from 'rxjs';
import {catchError, delay, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Interview} from '../../model/interview';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService{
  constructor(private http: HttpClient) {
  }
  url = 'http://localhost:3000';

  getInterviews(): Observable<Interview>{
    return this.http.get<Interview>(this.url + '/interview').pipe(
      delay(1000));
  }

  getData(): Observable<Interview>{
    return this.http.get<Interview>(this.url + '/interview').pipe(
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

 /* public getPosts(): Observable<Post[]>{
    return of(this.posts).pipe(delay(1000));
  }*/
}
