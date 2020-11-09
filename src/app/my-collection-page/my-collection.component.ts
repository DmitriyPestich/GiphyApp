import {Component, OnDestroy, OnInit} from '@angular/core';
import {GifsService} from '../services/gifs.service';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-my-collection',
    templateUrl: './my-collection.component.html',
    styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionComponent implements OnInit, OnDestroy {

    myColectionGifs: any[] = [];
    subscription: Subscription;

    constructor(private gifsServise: GifsService) {}

    ngOnInit(): void {
        this.subscription = this.gifsServise.getMycolectionGifs()
            .pipe(
                map(value => value.data)
            )
            .subscribe(value => {
                this.myColectionGifs = value;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    removeGif(id) {
        this.myColectionGifs = this.myColectionGifs.filter(gif => gif.id != id);
        this.gifsServise.removeIDinLS(id);
    }

}
