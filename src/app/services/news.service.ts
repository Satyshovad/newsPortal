import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../../model/post';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService{
  constructor(private http: HttpClient) {  }

  url = 'http://localhost:3000';
  getNeews(): Observable<Post>{
    return this.http.get<Post>(this.url + '/post').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /*getOne(id): Observable<Post>{
    return this.http.get<Post>(this.url + '/post/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }*/


  // tslint:disable-next-line:typedef
  /*getNews(post: number): Observable<any> {
    return this.http.get<Post[]>(`${this.url}post/?postId=${post}`);
  }
  getPostById(id: number): Observable<Post>{
    return this.http.get<Post>(`${this.url}post/${id}`);
  }*/

/*  getNPost(): Observable<Post> {
    return this.http.get<Post>(this.url + '/story')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }*/

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
