import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-my-gif',
  templateUrl: './my-gif.component.html',
  styleUrls: ['./my-gif.component.scss'],
  animations: [
    trigger('popup', [
      transition(':enter', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition(':leave', [
          animate(100, style({
              opacity: 0
          }))
      ])

    ])
  ]
})
export class MyGifComponent implements OnInit {

  @Input() gif;
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  show:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  removeGif(id: string) {
    this.onRemove.emit(id)
  }
}
