import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturalGuidePageRoutingModule } from './cultural-guide-routing.module';

import { CulturalGuidePage } from './cultural-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturalGuidePageRoutingModule
  ],
  declarations: [CulturalGuidePage]
})
export class CulturalGuidePageModule {}
