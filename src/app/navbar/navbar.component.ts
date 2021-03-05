import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  item: string;
  @Output() inputedItem: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  findItem(item: string){
    this.inputedItem.emit(item);
    alert('We don\'t have any information about \${item}');
  }
}
