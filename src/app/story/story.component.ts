import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit{
  Post: any = [];

  constructor(
    public restApi: NewsService
  ) {  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadNeews();
    /*this.restApi.getOne(this.postId).subscribe((data: {}) => {
      this.Post = data;
      });*/
  }

  // tslint:disable-next-line:typedef
  loadNeews(){
    return this.restApi.getNeews().subscribe((data: {}) => {
      this.Post = data;
      console.log(data);
    });
  }


  /*constructor(private postService: PostService, private activateRoute: ActivatedRoute){
    this.subscription = activateRoute.params.subscribe(params => this.postId = params.id);
  }*/

  // tslint:disable-next-line:typedef
  /*ngOnInit() {
    console.log('ParentComponent:OnInit');
    this.getPostList(this.postId);
  }*/

  // tslint:disable-next-line:typedef
  /*getPostList(post: number) {
    this.postService.getPost(post).subscribe(res => {
      this.listOfPost = res;
    });
  }*/

  /*constructor(private ns: NewsService){}


   columns = ['Id', 'Image', 'Title', 'Content'];
   index = ['id', 'img', 'title', 'content'];

  news: Post[] = [];

  ngOnInit(): void{
    this.ns.getNews().subscribe(
      (response) => {
        this.news = response;
      },
      (error) => {
        console.log('Error occured' + error);
      }
    );
  }*/
}
