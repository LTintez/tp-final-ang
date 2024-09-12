import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { HeroesAddPageComponent } from './heroes/pages/heroes-add-page/heroes-add-page.component';
import { HeroesListPageComponent } from './heroes/pages/heroes-list-page/heroes-list-page.component';
import { HeroesSearchPageComponent } from './heroes/pages/heroes-search-page/heroes-search-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            {
                path: 'add',
                title: 'Agregar Héroes',
                component: HeroesAddPageComponent,
            },
            {
                path: 'list',
                title: 'Listar Héroes',
                component: HeroesListPageComponent,
            },
            {
                path: 'search',
                title: 'Buscar Héroes',
                component: HeroesSearchPageComponent,
            },
        ],
    },
];
