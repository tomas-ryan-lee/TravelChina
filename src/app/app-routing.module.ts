import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule)
  },
  {
    path: 'convertisseur',
    loadChildren: () => import('./pages/convertisseur-list/convertisseur-list.module').then( m => m.ConvertisseurListPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'cultural-guide',
    loadChildren: () => import('./pages/cultural-guide/cultural-guide.module').then( m => m.CulturalGuidePageModule)
  },
  {
    path: 'travel-notes',
    loadChildren: () => import('./pages/travel-notes/travel-notes.module').then( m => m.TravelNotesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
