import {Component, Inject} from "@angular/core";
import { MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppliancesModelService} from "../../services/appliancesmodel.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-client-applianceModel',
  templateUrl: './add-client-applianceModel.component.html'
})
export class AddClientApplianceModelComponent {
  applianceModelFormGroup= new FormGroup({
    name: new FormControl('',[Validators.required]),
    model: new FormControl('',[Validators.required]),
    urlToImage: new FormControl('',[Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddClientApplianceModelComponent>, private http:HttpClient, private appliancesModelService:AppliancesModelService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
