import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifUploadService {

  constructor() { }

  postFile(src, tags) {
      const formdata = new FormData();
      formdata.append("tags", tags);
      formdata.append("source_image_url", src);
      return fetch("https://upload.giphy.com/v1/gifs?api_key=maEZr8ZDQVygYlN5czuJLpUabiwZoEMS", {method: 'POST', body: formdata, redirect: 'follow'})
  }
}
