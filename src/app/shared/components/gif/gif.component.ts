import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {GifsService} from '../../../services/gifs.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-gif',
    templateUrl: './gif.component.html',
    styleUrls: ['./gif.component.scss'],
    animations: [
        trigger('popup', [
            transition(':enter', [
                style({ opacity: 0}),
                animate(200, style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate(100, style({
                    opacity: 0
                }))
            ])

        ])
    ]
})

export class GifComponent implements OnInit {

    @Input() gif;

    show = false;

    constructor(
        public gifsServise: GifsService,
        public auth: AuthService
    ) {}

    ngOnInit() {}

    addGif(id) {
        this.gifsServise.addIDinLS(id);
    }

    removeGif(id) {
        this.gifsServise.removeIDinLS(id);
    }
}
