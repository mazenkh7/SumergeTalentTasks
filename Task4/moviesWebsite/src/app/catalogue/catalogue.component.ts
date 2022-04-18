import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
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

  constructor(private catalogueService: CatalogueService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  pageNumber = 1;
  pageJSON = {};
  moviesJSON: MovieModel[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageNumber = params['page'] || 1;
      this.catalogueService.getTopRated(Math.max(this.pageNumber, 1)).subscribe(r => {
          this.catalogueService.page = r;
          this.catalogueService.movies = r['results'];
          this.pageJSON = r;
          this.moviesJSON = <MovieModel[]>r['results'];
        },
        error => {
          this.router.navigate(['/404']);
        });
    });
  }

}
