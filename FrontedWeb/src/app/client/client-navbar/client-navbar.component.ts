import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {
  id:string ;
  constructor(private route:ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
  }

}
