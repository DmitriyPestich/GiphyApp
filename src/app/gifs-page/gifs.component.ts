import {Component, OnInit, OnDestroy} from '@angular/core';
import {GifsService} from '../services/gifs.service';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit, OnDestroy {

  gifs:any[] = [];
  subscription: Subscription;

  constructor(public gifsServise: GifsService) { }

  ngOnInit(): void {
    this.gifsServise.getTrendingGifs();
    this.subscription = this.gifsServise.getGifs()
        .pipe(
            map(value => value.data)
        )
        .subscribe((value:any) => {
            this.gifs = value;
        });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
