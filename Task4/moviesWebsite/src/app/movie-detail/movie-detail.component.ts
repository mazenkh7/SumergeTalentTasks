import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";
import {LoginService} from "../services/login.service";
import {MovieModel} from "../services/movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {

  // movieId = 0;
  movie = new MovieModel();
  constructor(private route: ActivatedRoute, private catalogueService: CatalogueService, private loginService: LoginService,
              private router: Router) {
    this.movie = loginService.currentMovieDetail;
  }

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn){
      console.log("not logged")
      this.router.navigate(['']);
    }
    if (this.movie.id==0){
    let movieId = this.route.snapshot.params['id'];
    this.catalogueService.getMovieById(movieId).subscribe(r=>{
      this.movie = r;
    });
  }
  }

}
