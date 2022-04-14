import {Component, Input, OnInit} from '@angular/core';
import {CatalogueService} from "../../services/catalogue.service";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {

  // @ts-ignore
  @Input() movie;
  constructor(private catalogueService: CatalogueService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  redirectToMovie(id: number) {
    this.catalogueService.getMovieById(id).subscribe(r=>{
      this.loginService.currentMovieDetail = r;
      this.router.navigate(['/details/',id]);
    })
  }
}
