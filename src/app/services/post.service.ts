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


  /*posts: Post[];

  public constructor() {
    this.posts = [
      new Post('1', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b3fcf358938943.5a126b66c71a8.jpg', 'Home Credit Bank.', 'Current informations...'),
      new Post('2', 'https://old.informburo.kz/img/article/1055/15_main.jpg', 'Karel Gorak, Head of Home Credit Bank.', 'About the situation in the bank, customer support and receiving 42,500 tenge.'),
      new Post('3', 'https://informburo.kz/storage/photos/123/main/tOgunBhkuIT2XEnQCpDccwefuH5rwclqsk8xGX68.jpg', 'Stanislav Chan, Home Credit Bank.', 'All mobile applications will be integrated into ecosystems.'),
      ];
  }

  public getPosts(): Observable<Post[]>{
    return of(this.posts).pipe(delay(1000));
  }*/

  /*public getPost(id): Observable<Post>{
    // tslint:disable-next-line:triple-equals no-shadowed-variable
    const Post = this.posts.find(i => i.postId == id);
    return of(Post).pipe(delay(1500));
  }*/
}
