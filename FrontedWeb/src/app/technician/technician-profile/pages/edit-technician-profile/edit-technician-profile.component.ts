import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Technician} from "../../model/technician";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../../../client/client-profile/model/client";

@Component({
  selector: 'app-edit-technician-profile',
  templateUrl: './edit-technician-profile.component.html',
  styleUrls: ['./edit-technician-profile.component.css']
})
export class EditTechnicianProfileComponent {
  editTechnicianProfileFormGroup= new FormGroup({
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
    public dialogRef: MatDialogRef<EditTechnicianProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: Client,
  ){
    this.editTechnicianProfileFormGroup.setValue({
      names:data.names,
      lastNames:data.lastNames,
      address:data.address,
      cellphoneNumber:data.cellPhoneNumber,
      email:data.email,
      password:data.password
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
