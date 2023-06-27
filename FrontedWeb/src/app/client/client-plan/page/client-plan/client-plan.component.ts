import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../../client-profile/model/client";
import {ClientsService} from "../../../client-profile/services/clients.service";


@Component({
  selector: 'app-client-plan',
  templateUrl: './client-plan.component.html',
  styleUrls: ['./client-plan.component.css']
})
export class ClientPlanComponent implements OnInit {
  id: string;
  clientData: Client;
  constructor(private route: ActivatedRoute, private clientsService: ClientsService) {
    this.clientData={} as Client;
    this.id=this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.updatePlansData();
  }

  updatePlansData(){
    this.clientsService.getById(this.id).subscribe((response:any)=>{
      this.clientData=response;
      console.log(response);
    });
  }
  clickAddTodo(e:any){
    alert(`${e} Plan successfully selected`);
    this.clientData.planType=e;
    this.clientsService.update(this.clientData.id,this.clientData).subscribe((response:any)=>{
      this.updatePlansData();
    })
  }
}
