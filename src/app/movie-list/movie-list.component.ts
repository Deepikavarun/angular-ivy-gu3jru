import { Component, OnInit } from '@angular/core';
import { movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent  {

  movie=movie;

}