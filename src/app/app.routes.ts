import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MovieComponent } from './pages/movie/movie.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { PersonalAccountComponent } from './pages/personal-account/personal-account.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'profile', component: PersonalAccountComponent},
];
