import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {AddClientApplianceModelComponent} from "../add-client-applianceModel/add-client-applianceModel.component";
import {EditClientApplianceModelComponent} from "../edit-client-appliance/edit-client-applianceModel.component";
import {ApplianceModel} from "../../model/appliancemodel";
import {AppliancesModelService} from "../../services/appliancesmodel.service";

@Component({
  selector: 'app-client-applianceModel',
  templateUrl: './client-applianceModel.component.html',
  styleUrls: ['./client-applianceModel.component.css']
})
export class ClientApplianceModelComponent implements OnInit {
  id: string;
  appliancesModelData: ApplianceModel[];
  searchKey: string;
  constructor(private route: ActivatedRoute,private appliancesModelService: AppliancesModelService,
              private dialog: MatDialog) {
    this.searchKey = '';
    this. appliancesModelData=[] as ApplianceModel[];
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.updateAppliancesData();
  }

  openDialogAdd(): void{
    let applianceModel: ApplianceModel;
    applianceModel={} as ApplianceModel;
    applianceModel.id=0;
    applianceModel.clientId=Number(this.id);
    const dialogRef=this.dialog.open(AddClientApplianceModelComponent,{
      data: applianceModel
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        applianceModel.name=result.get("name")?.value;
        applianceModel.model=result.get("model")?.value;
        applianceModel.urlToImage=result.get("urlToImage")?.value;
        this.appliancesModelService.create(applianceModel,applianceModel.clientId).subscribe((response:any)=>{
          this.updateAppliancesData();
          alert("Add appliance Successfully");
        });
      }
    });
  }
  updateAppliancesData(){
    this.appliancesModelService.getByClientId(this.id).subscribe((response:any)=>{
      this.appliancesModelData=response;
      console.log(response);
    });
  }

  openDialogUpdate(data: ApplianceModel): void{
    const dialogRef=this.dialog.open(EditClientApplianceModelComponent,{
      data: {...data}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result!=undefined){
        data.name=result.get("name")?.value;
        data.model=result.get("model")?.value;
        data.urlToImage=result.get("urlToImage")?.value;
        this.appliancesModelService.update(data.id,{
          name:data.name,
          model:data.model,
          urlToImage:data.urlToImage
        }).subscribe(response=>{
          this.updateAppliancesData();
          console.log("Updated");
        })
      }
    });
  }
}

