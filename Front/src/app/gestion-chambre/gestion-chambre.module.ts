import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionChambreRoutingModule } from './gestion-chambre-routing.module';
import { DashchambreComponent } from './dashchambre/dashchambre.component';


@NgModule({
  declarations: [
    DashchambreComponent,
  ],
  imports: [
    CommonModule,
    GestionChambreRoutingModule
  ]
})
export class GestionChambreModule {

 }
