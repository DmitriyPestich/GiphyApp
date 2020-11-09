import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';

import { AppComponent } from './app.component';
import { SearchComponent } from './gifs-page/search/search.component';
import { GifsComponent } from './gifs-page/gifs.component';
import { MyCollectionComponent } from './my-collection-page/my-collection.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddNewGifComponent } from './add-gif-page/add-new-gif.component';
import { LoginComponent } from './login-page/login.component';
import { GifComponent } from './shared/components/gif/gif.component';
import { MyGifComponent } from './shared/components/my-gif/my-gif.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GifsComponent,
    MyCollectionComponent,
    ErrorPageComponent,
    ReversePipe,
    AddNewGifComponent,
    LoginComponent,
    GifComponent,
    MyGifComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
