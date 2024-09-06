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
                path: '',
                title: 'heroes-add',
                component: HeroesAddPageComponent,
            },
            {
                path: 'list',
                title: 'heroes-list',
                component: HeroesListPageComponent,
            },
            {
                path: 'search',
                title: 'heroes-search',
                component: HeroesSearchPageComponent,
            },
        ],
    },
];
