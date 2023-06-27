import { Component, OnInit } from '@angular/core';
import {ApplianceModel} from "../../../client-appliance/model/appliancemodel";
import {ActivatedRoute} from "@angular/router";
import {AppliancesModelService} from "../../../client-appliance/services/appliancesmodel.service";
import {MatDialog} from "@angular/material/dialog";
import {Appointment} from "../../model/appointment";
import {AppointmentsService} from "../../services/appointments.service";
import {EditClientAppointmentComponent} from "../edit-client-appointment/edit-client-appointment.component";
import {AddClientAppointmentComponent} from "../add-client-appointment/add-client-appointment.component";

@Component({
  selector: 'app-client-appointment',
  templateUrl: './client-appointment.component.html',
  styleUrls: ['./client-appointment.component.css']
})
export class ClientAppointmentComponent implements OnInit {
  id: string;
  appointmentData: Appointment[];
  appliancesModelData: ApplianceModel[];

  constructor(private route: ActivatedRoute, private appointmentsService: AppointmentsService,private appliancesModelService: AppliancesModelService,
              private dialog: MatDialog) {
    this. appointmentData=[] as Appointment[];
    this. appliancesModelData=[] as ApplianceModel[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.updateAppointmentsData();
  }

  updateAppointmentsData(){
    this.appointmentData=[];
    this.appliancesModelData=[];
    this.appointmentsService.getByClientId(this.id).subscribe((response:any)=>{
      this.appointmentData=response;
    })
    this.appliancesModelService.getByClientId(this.id).subscribe((response:any)=>{
      this.appliancesModelData=response;
    })
  }
  openDialogAdd(): void{
    let applianceModel: ApplianceModel;
    applianceModel={} as ApplianceModel;
    applianceModel.id=0;
    applianceModel.clientId=Number(this.id);
    let appointment: Appointment;
    appointment={} as Appointment;
    appointment.id=0;
    appointment.clientId=Number(this.id);
    const dialogRef=this.dialog.open(AddClientAppointmentComponent,{
      data: {
        applianceModel:this.appliancesModelData,
        selected:"",
        appointment:appointment,
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        appointment.clientId=result.appointment.clientId;
        appointment.applianceModelId=result.selected;
        appointment.dateReserve=result.appointment.dateReserve;
        appointment.dateAttention=result.appointment.dateAttention;
        appointment.hour=result.appointment.hour;
        console.log(result.selected)
        this.appointmentsService.create(appointment.clientId,appointment.applianceModelId,appointment).subscribe((response:any)=>{
          this.updateAppointmentsData();
          alert("Add appointment Successfully");
        });
      }
    });
  }
  openDialogUpdate(data: Appointment): void{
    const dialogRef=this.dialog.open(EditClientAppointmentComponent,{
      data:{...data}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        data.dateAttention=result.get("dateAttention")?.value;
        this.appointmentsService.update(data.id,data).subscribe(response=>{
          this.updateAppointmentsData();
          console.log("Updated");
        })
      }
    });
  }


}

