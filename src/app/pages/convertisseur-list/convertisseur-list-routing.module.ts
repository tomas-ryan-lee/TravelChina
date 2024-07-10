import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertisseurListPage } from './convertisseur-list.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertisseurListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertisseurListPageRoutingModule {}
