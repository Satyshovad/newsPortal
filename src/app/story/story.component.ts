import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  posts = [
    {img: 'https://krimzdorovie.ru/media/k2/galleries/415_m/bigstock-Girl-at-dentist-in-dentist-cli-118390988.jpg', name: 'Dental treatment and removal', title: 'Who can get dental services for free and how?'},
    {img: 'https://avatars.mds.yandex.net/get-zen_doc/1718701/pub_5d98707ba06eaf00aeaab03b_5d9a067b4e057700ae87a8cd/scale_1200', name: 'State employees salary increase', title: 'How much will teachers, doctors and social workers receive?'},
    {img: 'https://informburo.kz/storage/photos/43/main/C7L1YWG70dY9foZWP85S9Ro2LgHnEyYEyO4FB5j3.jpg', name: 'Investments available to everyone', title: 'How to start investing with $ 10 in the Tabys app'}
  ];
  constructor() {
  }
  ngOnInit(): void {
  }

}
