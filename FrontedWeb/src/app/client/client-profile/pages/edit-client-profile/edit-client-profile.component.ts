import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Client} from "../../model/client";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-client-applianceModel',
  templateUrl: './edit-client-profile.component.html',
  styleUrls: ['./edit-client-profile.component.css']
})
export class EditClientProfileComponent  {
  editClientProfileFormGroup= new FormGroup({
    names: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    lastNames: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    address: new FormControl('',[Validators.required,Validators.minLength(6)]),
    cellPhoneNumber: new FormControl('',[Validators.required, Validators.pattern("^(9)([0-9]){8}$")]),
    email: new FormControl('',[Validators.required,
      Validators.email]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
  });

  constructor(
    public dialogRef: MatDialogRef<EditClientProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: Client,
  ){
    this.editClientProfileFormGroup.setValue({
      names:data.names,
      lastNames:data.lastNames,
      address:data.address,
      cellPhoneNumber:data.cellPhoneNumber,
      email:data.email,
      password:data.password
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
