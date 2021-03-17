import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsPortal';
  wordItem: string;

  // tslint:disable-next-line:typedef
  addItems(item: string){
    this.wordItem = item;
    alert('We don\'t have some information about -  ' + item);
    console.log(this.wordItem);
  }
}


