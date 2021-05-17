import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ BrowserModule, 
  ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: MovieListComponent },
    ])
     ],
  declarations: [ AppComponent, HelloComponent, MovieListComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
