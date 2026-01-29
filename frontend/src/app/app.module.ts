import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DetailfoyerComponent } from './gestion-foyer/detail-foyer/detail-foyer.component';
import { UpdateFoyerComponent } from './gestion-foyer/update-foyer/update-foyer.component';
import { DeletefoyerComponent } from './gestion-foyer/delete-foyer/delete-foyer.component';
import { AdduniversiteComponent } from './gestion-universite/add-universite/add-universite.component';
import { ShowuniversiteComponent } from './gestion-universite/show-universite/show-universite.component';
import { UpdateuniversiteComponent } from './gestion-universite/update-universite/update-universite.component';
import { DeleteuniversiteComponent } from './gestion-universite/delete-universite/delete-universite.component';
import { DetailuniversiteComponent } from './gestion-universite/detail-universite/detail-universite.component';
import { AddfeedbackComponent } from './gestion-feedback/add-feedback/add-feedback.component';
import { ShowfeedbackComponent } from './gestion-feedback/show-feedback/show-feedback.component';

import { AddChambreComponent } from './gestion-chambre/add-chambre/add-chambre.component';
import { ShowChambreComponent } from './gestion-chambre/show-chambre/show-chambre.component';
import { UpdateChambreComponent } from './gestion-chambre/update-chambre/update-chambre.component';
import { DeleteChambreComponent } from './gestion-chambre/delete-chambre/delete-chambre.component';
import { DetailChambreComponent } from './gestion-chambre/detail-chambre/detail-chambre.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Chart } from 'chart.js';

import { AddBlocComponent } from './gestion-bloc/add-bloc/add-bloc.component';

import { AfficherBlocComponent } from './gestion-bloc/afficher-bloc/afficher-bloc.component';
import { RouterModule } from '@angular/router';
import { DeleteBlocComponent } from './gestion-bloc/delete-bloc/delete-bloc.component';
import { ModifyBlocComponent } from './gestion-bloc/modify-bloc/modify-bloc.component';
import { DetailBlocComponent } from './gestion-bloc/detail-bloc/detail-bloc.component';

import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UniversiteDashboardComponent } from './universite-dashboard/universite-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { AddUserComponent } from './gestion-utilisateur/add-user/add-user.component';
import { ShowUserComponent } from './gestion-utilisateur/show-user/show-user.component';
import { UpdateUserComponent } from './gestion-utilisateur/update-user/update-user.component';
import { DeleteUserComponent } from './gestion-utilisateur/delete-user/delete-user.component';
import { DetailUserComponent } from './gestion-utilisateur/detail-user/detail-user.component';
import { ShowfoyerComponent } from './gestion-foyer/show-foyer/show-foyer.component';
import { AddfoyerComponent } from './gestion-foyer/add-foyer/add-foyer.component';
import { AppRoutingModule } from './app-routing.module';
import { BackfrontComponent } from './backfront/backfront.component';
import { BackendComponent } from './backend/backend.component';
import { TransparentNavbarComponent } from './transparent-navbar/transparent-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddReservationComponent } from './gestion-reservation/add-reservation/add-reservation.component';
import { ShowReservationComponent } from './gestion-reservation/show-reservation/show-reservation.component';
import { UpdateReservationComponent } from './gestion-reservation/update-reservation/update-reservation.component';
import { DetailReservationComponent } from './gestion-reservation/detail-reservation/detail-reservation.component';
import { GestionReservationModule } from './gestion-reservation/gestion-reservation.module';
import { GestionBlocModule } from './gestion-bloc/gestion-bloc.module';
import { GestionChambreModule } from './gestion-chambre/gestion-chambre.module';


@NgModule({
  declarations: [
    AppComponent,

AddfoyerComponent,
ShowfoyerComponent,
DetailfoyerComponent,
UpdateFoyerComponent,
DeletefoyerComponent,
AdduniversiteComponent,
ShowuniversiteComponent,
UpdateuniversiteComponent,
DeleteuniversiteComponent,
DetailuniversiteComponent,
AddfeedbackComponent,
ShowfeedbackComponent,
HomePageComponent,


    AddChambreComponent,
    ShowChambreComponent,
    UpdateChambreComponent,
    DeleteChambreComponent,
    DetailChambreComponent,

    AddBlocComponent,

      AfficherBlocComponent,
        DeleteBlocComponent,
        ModifyBlocComponent,
        DetailBlocComponent,
        RegisterComponent,
        AuthenticationComponent,
        StudentDashboardComponent,
        UniversiteDashboardComponent,
        AdminDashboardComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        CheckEmailComponent,
        BackfrontComponent,
        BackendComponent,
        TransparentNavbarComponent,




  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,HighchartsChartModule,GestionReservationModule,GestionBlocModule,GestionChambreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
