import {MovieModel} from "./movie.model";

export class MoviePageModel{
  constructor() {
  }

  page: number = 0;
  results: MovieModel[] = [];
  total_pages: number = 0;
  total_results: number = 0;
}
