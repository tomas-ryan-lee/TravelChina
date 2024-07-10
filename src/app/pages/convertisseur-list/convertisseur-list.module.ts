import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertisseurListPageRoutingModule } from './convertisseur-list-routing.module';

import { ConvertisseurListPage } from './convertisseur-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertisseurListPageRoutingModule
  ],
  declarations: [ConvertisseurListPage]
})
export class ConvertisseurListPageModule {}
