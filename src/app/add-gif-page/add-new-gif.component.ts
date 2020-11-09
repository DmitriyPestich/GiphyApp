import {Component} from '@angular/core';
import {GifUploadService} from '../services/gif-upload.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {GifsService} from '../services/gifs.service';


@Component({
    selector: 'app-add-new-gif',
    templateUrl: './add-new-gif.component.html',
    styleUrls: ['./add-new-gif.component.scss']
})
export class AddNewGifComponent {

    urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    arrTags: any[] = [];
    errorMessage: string;
    procesing: string;
    success: string;
    submitted = false;

    form = new FormGroup({
        tags: new FormControl('', [Validators.required]),
        btn: new FormControl(''),
        url: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
    });

    constructor(
        private gifUploadService: GifUploadService,
        private gifsServise: GifsService
    ) {
    }

    submit() {
        this.procesing = 'Loading...';
        this.submitted = true;
        this.gifUploadService.postFile(this.form.value.url, this.arrTags)
            .then(response => response.text())
            .then((result) => {
                const resp = JSON.parse(result);
                this.gifsServise.addIDinLS(resp.data.id);
                this.arrTags = [];
                this.form.reset();
                this.procesing = '';
                this.submitted = false;
                this.success = 'Gif is added!';
            })
            .catch((error) => {
                this.errorMessage = 'error';
                this.procesing = '';
                this.submitted = false;
            });
    }

    addTag(value) {
        if (value.trim()) this.arrTags.push(value);
    }

    removeTag(id) {
        this.arrTags.splice(id, 1);
    }

}
