import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  Interview: any = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getInterviews().subscribe(data => {
      this.Interview = data;
      this.loadInterview();
    });
  }

  // tslint:disable-next-line:typedef
  loadInterview(){
    return this.postService.getData().subscribe((data: {}) => {
      this.Interview = data;
      console.log(data);
    });
  }

}
