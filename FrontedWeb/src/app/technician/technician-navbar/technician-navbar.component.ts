import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-technician-navbar',
  templateUrl: './technician-navbar.component.html',
  styleUrls: ['./technician-navbar.component.css']
})
export class TechnicianNavbarComponent implements OnInit {
  id:string ;
  constructor(private route:ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
  }

}
