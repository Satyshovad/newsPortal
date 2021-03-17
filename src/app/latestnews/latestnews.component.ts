import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {
  title = 'Latest News';
  hText = 'Current informations in our country and cities.';
  newsItems = [
    {img: 'https://odessa.web2ua.com/wp-content/uploads/2020/05/562235_v_odesskoj_oblasti_za_sutki_vyzdorovelo_r.jpeg', title: 'Infected with covid', content: 'During the day, 766 cases of Covid-19 infection were detected in Kz'},
    {img: 'https://www.1zoom.ru/big2/47/234125-svetik.jpg', title: 'Weather forecast for February 21', content: 'A low-level snowstorm is expected in the north of Kz, in the south – fog, ice'},
    // tslint:disable-next-line:max-line-length
    {img: 'https://informburo.kz/storage/photos/123/main/tOgunBhkuIT2XEnQCpDccwefuH5rwclqsk8xGX68.jpg', title: 'Stanislav Chan, Home Credit Bank. ', content: 'All mobile applications will be integrated into ecosystems'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
