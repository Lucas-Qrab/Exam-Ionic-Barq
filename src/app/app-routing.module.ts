import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'favori',
    loadChildren: () => import('./pages/favori/favori.module').then( m => m.FavoriPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'oeuvre/:id',
    loadChildren: () => import('./components/oeuvre/oeuvre.module').then( m => m.OeuvrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
