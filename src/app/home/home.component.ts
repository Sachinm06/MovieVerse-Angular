import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any
  theaterMovies: any
  popularMovies:any

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheaterMovies();
    this.getPopularMovies();
  }
  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies: any) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);

    })
  }

  getTheaterMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies: any) => {
      this.theaterMovies = movies;
      console.log(this.trendingMovies);

    })
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies: any) => {
      this.popularMovies = movies;
      console.log(this.trendingMovies);

    })
  }

  goToMovie(type:string, id:string){
this.router.navigate(['movie',type,id])
  }



}
