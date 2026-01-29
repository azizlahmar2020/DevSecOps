import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowuniversiteComponent } from './gestion-universite/show-universite/show-universite.component';
import { ShowfoyerComponent } from './gestion-foyer/show-foyer/show-foyer.component';
import { ShowfeedbackComponent } from './gestion-feedback/show-feedback/show-feedback.component';



import { GestionBlocModule } from './gestion-bloc/gestion-bloc.module';
import { GestionChambreModule } from './gestion-chambre/gestion-chambre.module';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './services/auth/guard.guard';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UniversiteDashboardComponent } from './universite-dashboard/universite-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { GestionUserModule } from './gestion-utilisateur/gestion-utilisateur.module';
import { BackfrontComponent } from './backfront/backfront.component';
import { BackendComponent } from './backend/backend.component';
import { AddReservationComponent } from './gestion-reservation/add-reservation/add-reservation.component';
import { ShowReservationComponent } from './gestion-reservation/show-reservation/show-reservation.component';

const routes: Routes = [
  {path:'',component:AuthenticationComponent},
  {path: 'gestion-foyer', loadChildren: () => import('./gestion-foyer/gestion-foyer.module').then(m => m.GestionfoyerModule)},
  {path: 'gestion-feedback', loadChildren: () => import('./gestion-feedback/gestion-feedback.module').then(m => m.GestionfeedbackModule)},
  {path: 'gestion-universite', loadChildren: () => import('./gestion-universite/gestion-universite.module').then(m => m.GestionuniversiteModule)},
  {path: 'gestion-universite/allun',component:ShowuniversiteComponent},
  {path: 'gestion-foyer/allfoy',component:ShowfoyerComponent},
  {path: 'gestion-feedback/allfed',component:ShowfeedbackComponent},
  { path: 'gestion-chambre', loadChildren: () => import('./gestion-chambre/gestion-chambre.module').then(m => m.GestionChambreModule) },


  { path: 'gestion-bloc', loadChildren: () => import('./gestion-bloc/gestion-bloc.module').then(m => m.GestionBlocModule) },

{path:'backfront',component:BackfrontComponent},
  {path: 'gestion-utilisateur', loadChildren: () => import('./gestion-utilisateur/gestion-utilisateur.module').then(m => m.GestionUserModule)},
  {path:'registry',component:RegisterComponent},
  {path:'login',component:AuthenticationComponent},
  { path: 'etudiant', component: StudentDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ETUDIANT'] } },
  { path: 'universite', component: UniversiteDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_UNIVERSITE'] } },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'check-email', component: CheckEmailComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

{path: 'backend', component: BackendComponent},

{ path: 'gestion-reservation', loadChildren: () => import('./gestion-reservation/gestion-reservation.module').then(m => m.GestionReservationModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),GestionBlocModule,GestionChambreModule, GestionUserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

