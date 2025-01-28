import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MovieComponent } from './pages/movie/movie.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { PersonalAccountComponent } from './pages/personal-account/personal-account.component';
import { PersonComponent } from './pages/person/person.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'profile', component: PersonalAccountComponent},
    {path: 'person/:id', component: PersonComponent},
    {path: 'favourite', component: FavouriteComponent},
];
