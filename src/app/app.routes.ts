import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { MovieComponent } from './components/InTheater/movie/movie.component';
import {GenresComponent} from './components/InTheater/genres/genres.component';
import {ActorComponent} from './components/actor/actor.component';
import {LoginComponent} from './components/auth/login/login.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {GenresListComponent} from './components/all-movies/genres-list/genres-list.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {SettingsComponent} from './components/user/settings/settings.component';
import {AccountComponent} from './components/user/account/account.component';
import {TvShowComponent} from './components/OnTV/tv-show/tv-show.component';
import {AllMoviesComponent} from './components/InTheater/all-movies/all-movies.component';
import {AllTvShowsComponent} from './components/OnTV/all-tv-shows/all-tv-shows.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'all-movies', component: AllMoviesComponent},
  { path: 'all-tv-shows', component: AllTvShowsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'account', component: AccountComponent},
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv-show/:id', component: TvShowComponent },
  { path: 'genres', component: GenresListComponent },
  { path: 'genres/:id/:name', component: GenresComponent },
  { path: 'actor/:id', component: ActorComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent}
];
