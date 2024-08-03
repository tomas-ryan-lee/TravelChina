import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturalGuidePage } from './cultural-guide.page';

const routes: Routes = [
  {
    path: '',
    component: CulturalGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturalGuidePageRoutingModule {}
