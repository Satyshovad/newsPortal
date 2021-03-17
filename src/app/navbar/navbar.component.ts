import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  word: string;
  @Output() inputedItem: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addItem( word: string){
    this.inputedItem.emit(word);
  }
}
