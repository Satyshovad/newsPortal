import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  title = 'Coronavirus in Kazakhstan';

  getTitle(): string{
    return this.title;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
