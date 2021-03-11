import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
/*  titleText = 'Coronavirus in Kazakhstan';*/
  title = 'Coronavirus in Kazakhstan';

  getTitle(): string{
    return this.title;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
