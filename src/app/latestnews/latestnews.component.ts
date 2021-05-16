import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {
  title = 'Latest News';
  hText = 'Current informations in our country and cities.';
  Post: any = [];

  constructor(public restApi: NewsService) { }

  ngOnInit(): void {
    this.loadNeews();
  }

  // tslint:disable-next-line:typedef
  loadNeews(){
    return this.restApi.getNeews().subscribe((data: {}) => {
      this.Post = data;
      console.log(data);
    });
  }
}
