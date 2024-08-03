import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelNotesPageRoutingModule } from './travel-notes-routing.module';

import { TravelNotesPage } from './travel-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelNotesPageRoutingModule
  ],
  declarations: [TravelNotesPage]
})
export class TravelNotesPageModule {}
