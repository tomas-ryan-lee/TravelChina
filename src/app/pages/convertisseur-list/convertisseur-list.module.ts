import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertisseurListPageRoutingModule } from './convertisseur-list-routing.module';

import { ConvertisseurListPage } from './convertisseur-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConvertisseurListPageRoutingModule
  ],
  declarations: [ConvertisseurListPage]
})
export class ConvertisseurListPageModule {}
