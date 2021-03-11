import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-navbar',
  templateUrl: './covid-navbar.component.html',
  styleUrls: ['./covid-navbar.component.css']
})
export class CovidNavbarComponent implements OnInit {
  covid = 'Covid-19';
  constructor() { }

  ngOnInit(): void {
  }

}
