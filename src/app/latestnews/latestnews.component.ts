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
    /*{img: 'https://pbs.twimg.com/media/EURT9j6X0AE7bMg.jpg', title: 'Pension savings', content: 'Stories about the main misconceptions about unified testing'},
    {img: 'https://iagorod.kz/media/news/сдача_ЕНТ_новый_формат.jpg', title: 'Myths about the UNT', content: 'During the day, 766 cases of Covid-19 infection were detected in Kz'},
    // tslint:disable-next-line:max-line-length
    {img: 'https://s0.rbk.ru/v6_top_pics/resized/1440xH/media/img/2/09/756138226676092.jpg', title: 'Clubhouse', content: 'What it is, why it is needed and why everyone is talking about it'}
   */ ];
  constructor() { }

  ngOnInit(): void {
  }

}
