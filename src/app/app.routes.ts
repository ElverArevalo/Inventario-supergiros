import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';







// definir arreglo de rutas
  const appRoutes: Routes = [
    {path:'login', component: LoginComponent},
  
    {path:'**', component: NotFoundComponent }
];
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );