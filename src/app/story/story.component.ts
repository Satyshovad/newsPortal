import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {Post} from '../../model/post';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit{
  Post: any = [];
  postId: number;
  private subscription: Subscription;


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

  /*posts = [
    {id: 1, img: 'https://krimzdorovie.ru/media/k2/galleries/415_m/bigstock-Girl-at-dentist-in-dentist-cli-118390988.jpg', name: 'Dental treatment and removal', title: 'Who can get dental services for free and how?'},
    // tslint:disable-next-line:max-line-length
    {id: 2, img: 'https://avatars.mds.yandex.net/get-zen_doc/1718701/pub_5d98707ba06eaf00aeaab03b_5d9a067b4e057700ae87a8cd/scale_1200', name: 'State employees salary increase', title: 'How much will teachers etc. receive?'},
    {id: 3, img: 'https://informburo.kz/storage/photos/43/main/C7L1YWG70dY9foZWP85S9Ro2LgHnEyYEyO4FB5j3.jpg', name: 'Investments available to everyone', title: 'How to start investing with $ 10 in the Tabys app'}
  ];*/
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
