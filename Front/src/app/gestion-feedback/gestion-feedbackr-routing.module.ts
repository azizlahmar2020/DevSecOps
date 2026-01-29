import { ShowfeedbackComponent } from './show-feedback/show-feedback.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfeedbackComponent } from './add-feedback/add-feedback.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'addFed', component: AddfeedbackComponent },
      { path: 'allfed', component: ShowfeedbackComponent },
      
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionfeedbackRoutingModule {}
