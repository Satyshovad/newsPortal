import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {UserService} from '../services/user.service';
import {FormControl} from '@angular/forms';
import {Post} from '../../model/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  comment: FormControl = new FormControl();
  toDate: Date = new Date();
  otherPosts: boolean;

  public posts: Post[];
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.route.snapshot.data.posts;
  }

  // tslint:disable-next-line:typedef
  show() {
    this.otherPosts = !this.otherPosts;
  }
}
