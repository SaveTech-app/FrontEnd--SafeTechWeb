import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Technician} from "../technician/technician-profile/model/technician";
import {Client} from "../client/client-profile/model/client";
import {ClientsService} from "../client/client-profile/services/clients.service";
import {TechniciansService} from "../technician/technician-profile/services/technicians.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../users/services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: Boolean = false;

  userFormGroup= new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
  });

  user: Client;
  clientFound: Client;

  technicianData: Technician;
  technicianFound: Technician;

  constructor(private clientsService: ClientsService, private techniciansService: TechniciansService,
              private route:Router, private usersService: UsersService) {
    this.user = {} as Client;
    this.clientFound = {} as Client;
    this.technicianData = {} as Technician;
    this.technicianFound = {} as Technician;

  }

  ngOnInit(): void {
  }
  SubmitLogin(){
    if(this.userFormGroup.valid){
      this.usersService.authenticateUser({
        username: this.userFormGroup.get('username')?.value,
        password: this.userFormGroup.get('password')?.value,
      }).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem('token',response.token);
        this.usersService.verifyTokenClient().subscribe((response2: any)=>{
          this.clientsService.getByUsername(response.username).subscribe((response3: any)=>{
            this.route.navigate(['/client',response3.id,'client-profile']);
          })
        })
        this.usersService.verifyTokenTechnician().subscribe((response2: any)=>{
          this.techniciansService.getByUsername(response.username).subscribe((response3: any)=>{
            console.log(response3.id);
            this.route.navigate(['/technician',response3.id,'technician-profile']);
          })
        })
      })
    }
  }

}
