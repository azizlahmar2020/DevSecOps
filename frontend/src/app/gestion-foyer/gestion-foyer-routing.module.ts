import { ShowfoyerComponent } from './show-foyer/show-foyer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletefoyerComponent } from './delete-foyer/delete-foyer.component';
import { AddfoyerComponent } from './add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { DetailfoyerComponent } from './detail-foyer/detail-foyer.component';
import { DashfoyerComponent } from './dashfoyer/dashfoyer.component';

const routes: Routes = [
  {
    path: '',
    component: DashfoyerComponent,
    children: [
      { path: 'addFoy', component: AddfoyerComponent },
      { path: 'allfoy', component: ShowfoyerComponent },
      {
        path: 'detailFoy/:idFoyer',
        component: DetailfoyerComponent,
      },
      {
        path: 'updateFoy/:idFoyer',
        component: UpdateFoyerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionfoyerRoutingModule {}
