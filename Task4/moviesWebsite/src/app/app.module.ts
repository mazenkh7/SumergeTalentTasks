import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieCardComponent} from './catalogue/movie-card/movie-card.component';
import {HeaderComponent} from './header/header.component';
import {CatalogueService} from "./services/catalogue.service";
import {LoginService} from "./services/login.service";
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'toprated', component: CatalogueComponent},
  {path: 'toprated/:page', component: CatalogueComponent},
  // {path: 'details', component: MovieDetailComponent},
  {path: 'details/:id', component: MovieDetailComponent},
  {path: '404', component: NotFoundComponent},
  { path: '**', pathMatch: 'full', 
        component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogueComponent,
    MovieDetailComponent,
    MovieCardComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CatalogueService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
