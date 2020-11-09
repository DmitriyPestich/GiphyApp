import { Component, OnInit } from '@angular/core';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private gifsServise: GifsService) { }

  ngOnInit(): void {
  }

  search(value: string){
      this.gifsServise.searchGifs(value);
  }

}
