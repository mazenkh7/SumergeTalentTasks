export class MovieModel{

  constructor() {
  }

  id: number = 0;
  title: string = '';
  vote_average: number = 0;
  overview: string = '';
  release_date: string = '';
  poster_path: string = '';
  runtime: number = 0;
  tagline: string = '';
  backdrop_path: string ='';
  genres: {name: string, id: string}[] = [];
}
