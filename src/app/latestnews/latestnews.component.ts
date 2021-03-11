import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {
  title = 'Latest News';
  hText = 'Current informations in our country and cities.';
  constructor() { }

  ngOnInit(): void {
  }

}
