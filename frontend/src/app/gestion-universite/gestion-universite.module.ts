import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionuniversiteRoutingModule } from './gestion-universite-routing.module';
import { DashuniversiteComponent } from './dashuniversite/dashuniversite.component';


@NgModule({
  declarations: [
    DashuniversiteComponent
  ],
  imports: [
    CommonModule,
    GestionuniversiteRoutingModule
  ]
})
export class GestionuniversiteModule { }
