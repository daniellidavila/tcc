import { Component, Input, ViewChild, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '{{height}}',
      }), { params: { height: '32px' } }),
      state('close', style({
        height: '32px',
      })),
      transition('* => *', [
        animate('.3s')
      ]),
    ]),
  ],
})
export class ListViewComponent implements OnInit, OnChanges {
  @ViewChild('optionsContainer')container: ElementRef;

  @Input()title = 'Titulo'
  @Input()data: any[] = [];

  open = false;
  height = '50px';

  constructor() {
  }

  ngOnInit() {
    this.calcHeight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.firstChange) {
      this.calcHeight();
    }
  }

  private calcHeight() {
    setTimeout(() => {
      const element = this.container.nativeElement;
      this.height = `${element.clientHeight + 32}px`
    }, 0)
  }


}
