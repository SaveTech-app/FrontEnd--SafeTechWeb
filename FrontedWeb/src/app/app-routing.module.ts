import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import {ClientApplianceModelComponent} from "./client/client-appliance/page/client-applianceModel/client-applianceModel.component";
import {ClientPlanComponent} from "./client/client-plan/page/client-plan/client-plan.component";
import {RegisterClientComponent} from "./register-client/register-client.component";
import {RegisterTechnicianComponent} from "./register-technician/register-technician.component";
import {TechnicianProfileComponent} from "./technician/technician-profile/pages/technician-profile/technician-profile.component";
import {TechnicianReportComponent} from "./technician/technician-report/pages/technician-report/technician-report.component";
import {TechnicianRouteComponent} from "./technician/technician-route/technician-route.component";
import {ClientProfileComponent} from "./client/client-profile/pages/client-profile/client-profile.component";
import {
  ClientAppointmentComponent
} from "./client/client-appointment/page/client-appointment/client-appointment.component";
import {NoAuthGuard} from "./auth/guards/no-auth/no-auth.guard";
import {ClientGuard} from "./auth/guards/client/client.guard";
import {TechnicianGuard} from "./auth/guards/technician/technician.guard";


const routes: Routes = [

  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register-technician', component: RegisterTechnicianComponent},
      {path: 'register-client', component: RegisterClientComponent},
    ]
  },
  {path: 'client/:id',
    canActivate: [ClientGuard],
    canActivateChild: [ClientGuard],
    children: [
      { path: '', redirectTo: 'client-profile', pathMatch: 'full'},
      {path: 'appointment', component: ClientAppointmentComponent},
      {path: 'applianceModel',  component: ClientApplianceModelComponent},
      {path: 'plan', component: ClientPlanComponent},
      {path: 'client-profile', component: ClientProfileComponent}
    ]
  },
  { path: 'technician/:id',
    canActivate: [TechnicianGuard],
    canActivateChild: [TechnicianGuard],
    children:[
      { path: '', redirectTo: 'technician-profile',pathMatch: 'full'},
      { path: 'technician-profile', component: TechnicianProfileComponent},
      { path: 'route', component: TechnicianRouteComponent},
      { path: 'reports', component: TechnicianReportComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
