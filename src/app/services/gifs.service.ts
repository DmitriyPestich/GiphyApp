import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class GifsService {

    gifs$ = new Subject<any>();
    myColectionGifs$ = new Subject<any>();
    myGifs: any = [];
    title: string = 'Trending';

    constructor(private http: HttpClient) {}

    getTrendingGifs() {
        this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=100&rating=g`)
            .subscribe(value => {
                    this.title = 'Trending';
                    this.gifs$.next(value);
                }
            );
    }

    searchGifs(gifName) {
        if (gifName.trim()) {
            this.title = gifName;
            this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyApiKey}&limit=250`)
                .subscribe(value => {
                        this.gifs$.next(value);
                    }
                );
        } else {
            this.getTrendingGifs();
        }
    }

    getGifs() {
        return this.gifs$.asObservable();
    }

    addIDinLS(id) {
        if (this.myGifs.indexOf(id) === -1){
            this.myGifs.push(id);
            localStorage.setItem('ids', JSON.stringify(this.myGifs));
        }
    }

    removeIDinLS(id) {
        console.log(this.myGifs);
        let p = new Promise(resolve => {
            resolve(this.myGifs = this.myGifs.filter(gifId => gifId != id));
        });
        p.then(() => {
            if (this.myGifs.length) {
                localStorage.setItem('ids', JSON.stringify(this.myGifs));
            }
            else localStorage.removeItem('ids')
        });
    }

    getMycolectionGifs() {
        if (localStorage.getItem('ids')) {
            this.myGifs = JSON.parse(localStorage.getItem('ids'));
            let ids = (this.myGifs.join(','));
            this.http.get(`http://api.giphy.com/v1/gifs?api_key=${environment.giphyApiKey}&ids=${ids}`)
                .subscribe(value => {
                    this.myColectionGifs$.next(value);
                });
        }
        return this.myColectionGifs$.asObservable();
    }

}




