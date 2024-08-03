import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelNotesPage } from './travel-notes.page';

const routes: Routes = [
  {
    path: '',
    component: TravelNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelNotesPageRoutingModule {}
