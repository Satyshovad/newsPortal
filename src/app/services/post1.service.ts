import {Injectable} from '@angular/core';
import {Post} from '../../model/post';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostService} from './post.service';
import {Observable} from 'rxjs';
import {Interview} from '../../model/interview';

@Injectable()
export class Post1Service implements Resolve<Interview>{
  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {

    console.log('PostListResolver is called');
    return this.postService.getInterviews();
  }

}
