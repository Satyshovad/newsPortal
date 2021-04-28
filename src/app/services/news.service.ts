import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../model/post';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService{
  constructor(private http: HttpClient) {  }

  url = 'http://localhost:3000/news';

  // tslint:disable-next-line:typedef
  getNews(){
    return this.http.get<Post[]>(this.url);
  }

/*  getNPost(): Observable<Post> {
    return this.http.get<Post>(this.url + '/story')
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
  }*/
}
