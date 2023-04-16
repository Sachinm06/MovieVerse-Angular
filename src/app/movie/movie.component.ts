import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/auth.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  uname: any;
  review: any;

  data:any




  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private ds: AuthService, private au:AuthService) { }


  saveRating = this.fb.group({
    uname: [' ', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    review: [' ', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  send() {
    var uname = this.saveRating.value.uname
    var review = this.saveRating.value.review
    if (this.saveRating.valid) {
      this.ds.send(uname, review).subscribe((result: any) => {
        alert(result.message)
      })
    }
    else {
      alert('Invalid Form')
    }
  }


  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }

  

}
