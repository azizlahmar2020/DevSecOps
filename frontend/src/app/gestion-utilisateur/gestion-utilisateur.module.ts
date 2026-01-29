import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: 'addUser', component: AddUserComponent },
  { path: 'alluser', component: ShowUserComponent },
  { path: 'detailUser/:id', component: DetailUserComponent },
  { path: 'gestion-utilisateur/updateUser/:id', component: UpdateUserComponent }
];

@NgModule({
  declarations: [
    AddUserComponent,
    ShowUserComponent,
    DetailUserComponent,
    UpdateUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GestionUserModule { }