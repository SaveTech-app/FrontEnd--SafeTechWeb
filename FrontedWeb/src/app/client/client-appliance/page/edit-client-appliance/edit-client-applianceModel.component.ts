import { Component, Inject } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApplianceModel} from "../../model/appliancemodel";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:'app-edit-client-applianceModel',
  templateUrl: './edit-client-applianceModel.component.html',
  styleUrls: ['./edit-client-applianceModel.component.css']
})

export class EditClientApplianceModelComponent {
  editApplianceModelFormGroup= new FormGroup({
    name: new FormControl('',[Validators.required]),
    model: new FormControl('',[Validators.required]),
    urlToImage: new FormControl('',[Validators.required]),
  });


  constructor(
    public dialogRef: MatDialogRef<EditClientApplianceModelComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: ApplianceModel,
  ){
    this.editApplianceModelFormGroup.setValue({
      name:data.name,
      model:data.model,
      urlToImage:data.urlToImage
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
