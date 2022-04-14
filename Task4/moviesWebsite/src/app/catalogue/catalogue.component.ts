import {Component, Input, OnInit} from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {delay} from "rxjs";
import {MovieModel} from "../services/movie.model";
import {LoginService} from "../services/login.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  providers: [CatalogueService]
})
export class CatalogueComponent implements OnInit {

  constructor(private catalogueService: CatalogueService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) {

  }

  page = {};
  movies: MovieModel[] = [];

  ngOnInit(): void {

    if (!this.loginService.isLoggedIn) {
      console.log("not logged")
      this.router.navigate(['']);
    }
    let p = this.route.snapshot.params['page'];
    if (p==null)
      p=1;
    this.catalogueService.getTopRated(Math.max(p,1)).subscribe(r => {
      this.loginService.page = r;
      this.loginService.movies = r['results'];
      this.page = r;
      this.movies = <MovieModel[]>r['results'];

      // console.log(this.movies);
    });
    // console.log(this.page);
  }

}
