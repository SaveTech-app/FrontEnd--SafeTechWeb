import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Client} from "../../client/client-profile/model/client";
import {Appointment} from "../../client/client-appointment/model/appointment";
import {ClientsService} from "../../client/client-profile/services/clients.service";
import {AppointmentsService} from "../../client/client-appointment/services/appointments.service";

@Component({
  selector: 'app-technician-route',
  templateUrl: './technician-route.component.html',
  styleUrls: ['./technician-route.component.css']
})
export class TechnicianRouteComponent implements OnInit {
  id: String;

 clientData: Client[];
  appointmentData: Appointment[];

  constructor(private clientsService: ClientsService,
              private appointmentsService:AppointmentsService, private route: ActivatedRoute) {
    this.clientData = [] as Client[];
    this.appointmentData = [] as Appointment[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    this.updateRoutesData();
  }

  updateRoutesData(){
    this.appointmentData=[];
    this.clientData=[];
    this.appointmentsService.getAll().subscribe((response:any)=>{
      this.appointmentData=response;
      for(let appointmentaux of response ){
        this.clientsService.getById(appointmentaux.client.id).subscribe((response2:any)=>{
          console.log(response2);
          this.clientData.push(response2)
        })
      }
    });
  }
}
