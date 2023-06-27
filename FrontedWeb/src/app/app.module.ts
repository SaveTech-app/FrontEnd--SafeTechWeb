import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterTechnicianComponent } from './register-technician/register-technician.component';
import { ClientPlanComponent } from './client/client-plan/page/client-plan/client-plan.component';
import { ClientApplianceModelComponent } from './client/client-appliance/page/client-applianceModel/client-applianceModel.component';
import {MatMenuModule} from "@angular/material/menu";
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { ClientNavbarComponent } from './client/client-navbar/client-navbar.component';
import { TechnicianNavbarComponent } from './technician/technician-navbar/technician-navbar.component';
import {ClientsService} from "./client/client-profile/services/clients.service";
import {TechniciansService} from "./technician/technician-profile/services/technicians.service";
import { TechnicianProfileComponent } from './technician/technician-profile/pages/technician-profile/technician-profile.component';
import { TechnicianRouteComponent } from './technician/technician-route/technician-route.component';
import { TechnicianReportComponent } from './technician/technician-report/pages/technician-report/technician-report.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ClientProfileComponent } from './client/client-profile/pages/client-profile/client-profile.component';
import { EditClientProfileComponent } from './client/client-profile/pages/edit-client-profile/edit-client-profile.component';
import { EditTechnicianProfileComponent } from './technician/technician-profile/pages/edit-technician-profile/edit-technician-profile.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { AddClientApplianceModelComponent } from './client/client-appliance/page/add-client-applianceModel/add-client-applianceModel.component';
import {
  EditClientApplianceModelComponent
} from "./client/client-appliance/page/edit-client-appliance/edit-client-applianceModel.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {
  ClientAppointmentComponent
} from "./client/client-appointment/page/client-appointment/client-appointment.component";
import {
  EditClientAppointmentComponent
} from "./client/client-appointment/page/edit-client-appointment/edit-client-appointment.component";
import {AppointmentsService} from "./client/client-appointment/services/appointments.service";
import { EditTechnicianReportComponent } from './technician/technician-report/pages/edit-technician-report/edit-technician-report.component';
import {FilterPipe} from "./tools/filter.pipe";
import {MatStepperModule} from "@angular/material/stepper";
import {
  AddClientAppointmentComponent
} from "./client/client-appointment/page/add-client-appointment/add-client-appointment.component";
import {JwtInterceptor} from "./auth/jwt-interceptor";
import {AppliancesModelService} from "./client/client-appliance/services/appliancesmodel.service";
import {ReportsService} from "./technician/technician-report/services/reports.service";
import {AddTechnicianReportComponent} from "./technician/technician-report/pages/add-technician-report/add-technician-report.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RegisterClientComponent,
    RegisterTechnicianComponent,
    ClientPlanComponent,
    ClientApplianceModelComponent,
    HomeNavbarComponent,
    ClientNavbarComponent,
    TechnicianNavbarComponent,
    TechnicianProfileComponent,
    TechnicianRouteComponent,
    TechnicianReportComponent,
    ClientProfileComponent,
    EditClientProfileComponent,
    EditTechnicianProfileComponent,
    AddClientApplianceModelComponent,
    EditClientApplianceModelComponent,
   ClientAppointmentComponent,
  EditClientAppointmentComponent,
  EditTechnicianReportComponent,
    FilterPipe,
    AddClientAppointmentComponent,
    AddTechnicianReportComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSortModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatDialogModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatExpansionModule,
        MatStepperModule,
        CommonModule

    ],
  providers: [
    ClientsService,
    TechniciansService,
    AppliancesModelService,
    AppointmentsService,
    ReportsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    EditClientProfileComponent,
    EditTechnicianProfileComponent,
    AddClientApplianceModelComponent,
    EditClientApplianceModelComponent,
    EditClientAppointmentComponent,
    AddTechnicianReportComponent,
  ]

})
export class AppModule { }
