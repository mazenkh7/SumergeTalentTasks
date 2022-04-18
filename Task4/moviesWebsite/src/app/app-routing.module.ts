import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'toprated', canActivate: [AuthGuard], component: CatalogueComponent },
  { path: 'toprated/:page', canActivate: [AuthGuard], component: CatalogueComponent },
  { path: 'details', canActivate: [AuthGuard], component: MovieDetailComponent },
  { path: 'details/:id', canActivate: [AuthGuard], component: MovieDetailComponent },
  { path: '404', canActivate: [AuthGuard], component: NotFoundComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
