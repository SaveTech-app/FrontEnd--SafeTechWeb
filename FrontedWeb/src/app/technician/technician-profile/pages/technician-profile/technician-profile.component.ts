import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Technician} from "../../model/technician";
import {TechniciansService} from "../../services/technicians.service";
import {EditTechnicianProfileComponent} from "../edit-technician-profile/edit-technician-profile.component";

@Component({
  selector: 'app-technician-profile',
  templateUrl: './technician-profile.component.html',
  styleUrls: ['./technician-profile.component.css']
})
export class TechnicianProfileComponent implements OnInit {

  id:string;
  technicianActual: Technician;

  constructor(private techniciansService: TechniciansService, private route: ActivatedRoute,
              private dialog: MatDialog) {
    this.id=this.route.snapshot.paramMap.get('id')!;
    this.technicianActual={} as Technician;
  }

  ngOnInit(): void {
    this.getActualData();
  }

  getActualData():void{
    this.techniciansService.getById(this.id).subscribe((response:any)=>{
      this.technicianActual=response;
    })
  }

  openDialog(data: Technician): void {
    const dialogRef=this.dialog.open(EditTechnicianProfileComponent,{
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
        this.techniciansService.update(data.id,data).subscribe(response=>{
          this.getActualData();
        })
      }
    })
  }
}
