import {Component, Inject} from "@angular/core";
import { MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ReportsService} from "../../services/reports.service";

@Component({
  selector: 'app-add-technician-report',
  templateUrl: './add-technician-report.component.html'
})
export class AddTechnicianReportComponent {
  reportFormGroup= new FormGroup({
    observation: new FormControl('',[Validators.required]),
    diagnosis: new FormControl('',[Validators.required]),
    repairDescription: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddTechnicianReportComponent>, private http:HttpClient, private reportService:ReportsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
