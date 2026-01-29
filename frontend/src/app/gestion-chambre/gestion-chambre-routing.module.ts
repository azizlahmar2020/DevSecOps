import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { ShowChambreComponent } from './show-chambre/show-chambre.component';
import { DetailChambreComponent } from './detail-chambre/detail-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { DashchambreComponent } from './dashchambre/dashchambre.component';

const routes: Routes = [
  { path: 'add-chambre', component: AddChambreComponent },
  { path: 'show-chambre', component: ShowChambreComponent },
  { path: 'detail-chambre/:idChambre', component: DetailChambreComponent },
  { path: 'update-chambre/:id', component: UpdateChambreComponent },
  { path: 'dashchambre', component: DashchambreComponent },
  // Ajoutez d'autres routes selon votre structure et vos besoins
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionChambreRoutingModule {}
