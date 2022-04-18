import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MoviePageModel} from "./movie-page.model";
import {Observable} from "rxjs";
import {MovieModel} from "./movie.model";

@Injectable()
export class CatalogueService {

  currentMovieDetail = new MovieModel();
  page : MoviePageModel = new MoviePageModel();
  movies : MovieModel[] = [];

  constructor(private http: HttpClient) {
  }

  API_KEY = "4864663166e4123ea3b715171990dabb";
  API = "https://api.themoviedb.org/3/movie/"
  API_lang = "&language=en-US"

  getTopRated(page: number): Observable<MoviePageModel> {
    return this.http.get<MoviePageModel>(this.API + "top_rated?api_key=" + this.API_KEY + this.API_lang + "&page=" + page);
  }
  getMovieById(id: number): Observable<MovieModel>{
    return this.http.get<MovieModel>(this.API + id + "?api_key=" + this.API_KEY + this.API_lang );
  }

}
