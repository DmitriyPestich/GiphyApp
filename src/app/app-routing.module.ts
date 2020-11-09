import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifsComponent } from './gifs-page/gifs.component';
import { MyCollectionComponent } from './my-collection-page/my-collection.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddNewGifComponent } from './add-gif-page/add-new-gif.component';
import { LoginComponent } from './login-page/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', component: GifsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'saved-gifs', component: MyCollectionComponent, canActivate: [AuthGuard]},
  {path: 'add-new-gif', component: AddNewGifComponent, canActivate: [AuthGuard]},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
