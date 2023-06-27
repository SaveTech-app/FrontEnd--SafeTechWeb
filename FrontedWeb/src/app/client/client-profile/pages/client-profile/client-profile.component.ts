import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {ClientsService} from "../../services/clients.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EditClientProfileComponent} from "../edit-client-profile/edit-client-profile.component";

@Component({
  selector: 'app-client-applianceModel',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  id:string;
  clientActual: Client;

  constructor(private clientsService: ClientsService, private route: ActivatedRoute,
              private dialog: MatDialog) {
    this.id=this.route.snapshot.paramMap.get('id')!;
    this.clientActual={} as Client;
  }

  ngOnInit(): void {
    this.getActualData();
  }

  getActualData():void{
    this.clientsService.getById(this.id).subscribe((response:any)=>{
      this.clientActual=response;
    })
  }

  openDialog(data: Client): void {
    const dialogRef=this.dialog.open(EditClientProfileComponent,{
      data:{...data}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result!=undefined){
        data.names=result.get("names")?.value;
        data.lastNames=result.get("lastNames")?.value;
        data.address=result.get("address")?.value;
        data.cellPhoneNumber=result.get("cellPhoneNumber")?.value;
        data.email=result.get("email")?.value;
        data.password=result.get("password")?.value;
        this.clientsService.update(data.id,data).subscribe(response=>{
          this.getActualData();
        })
      }
    })
  }
}
