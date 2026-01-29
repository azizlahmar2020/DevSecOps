import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBlocComponent } from './detail-bloc/detail-bloc.component';
import { ModifyBlocComponent } from './modify-bloc/modify-bloc.component';
import { AfficherBlocComponent } from './afficher-bloc/afficher-bloc.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { ShowChambreComponent } from '../gestion-chambre/show-chambre/show-chambre.component';

const gestionBlocRoutes: Routes = [

  { path: 'detail-bloc/:id', component: DetailBlocComponent },
  { path: 'modify-bloc/:id', component: ModifyBlocComponent },
  { path: 'afficher-bloc', component: AfficherBlocComponent },
  { path: 'add-bloc', component: AddBlocComponent },
];

@NgModule({
  imports: [RouterModule.forChild(gestionBlocRoutes)],
  exports: [RouterModule],
})
export class GestionBlocRoutingModule {}
