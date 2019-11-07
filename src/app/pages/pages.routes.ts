import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';



// definir arreglo de rutas
  const pagesRoutes: Routes = [
    {
      path:'',
       component: PagesComponent,
       children: [
        {path:'home', component: HomeComponent, data: {titulo:'Home'}},
       
        {path:'', redirectTo: '/home', pathMatch: 'full'},
       ]
      },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );