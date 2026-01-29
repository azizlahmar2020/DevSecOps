import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduniversiteComponent } from './add-universite/add-universite.component';
import { ShowuniversiteComponent } from './show-universite/show-universite.component';
import { DetailuniversiteComponent } from './detail-universite/detail-universite.component';
import { UpdateuniversiteComponent } from './update-universite/update-universite.component';
import { DashuniversiteComponent } from './dashuniversite/dashuniversite.component';

const routes: Routes = [
 {path:'',component:DashuniversiteComponent,children:[{
    path: 'addun',
    component: AdduniversiteComponent,
  },
  {
    path: 'allun',
    component: ShowuniversiteComponent,
  },
  { path: 'detailUn/:idUniversite', component: DetailuniversiteComponent },
  { path: 'updateUn/:idUniversite', component: UpdateuniversiteComponent },]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionuniversiteRoutingModule {}
