import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionfoyerRoutingModule } from './gestion-foyer-routing.module';
import { DashfoyerComponent } from './dashfoyer/dashfoyer.component';


@NgModule({
  declarations: [
    DashfoyerComponent
  ],
  imports: [
    CommonModule,
    GestionfoyerRoutingModule
  ]
})
export class GestionfoyerModule { }
