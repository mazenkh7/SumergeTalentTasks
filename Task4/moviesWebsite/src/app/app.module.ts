import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MovieCardComponent } from './catalogue/movie-card/movie-card.component';
import { HeaderComponent } from './header/header.component';
import { CatalogueService } from "./services/catalogue.service";
import { LoginService } from "./services/login.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [CatalogueService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
