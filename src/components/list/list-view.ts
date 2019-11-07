import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html'
})
export class ListViewComponent {
  @Input()title = 'Titulo'

  text: string;

  constructor() {
    console.log('Hello ListComponent Component');
    this.text = 'Hello World';
  }

}
