import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppointmentsService} from "../../services/appointments.service";
import {ApplianceModel} from "../../../client-appliance/model/appliancemodel";
import {Appointment} from "../../model/appointment";

@Component({
  selector: 'app-add-client-appointment',
  templateUrl: './add-client-appointment.component.html'
})
export class AddClientAppointmentComponent {
  appointmentFormGroup= new FormGroup({
    dateReserve: new FormControl('',[Validators.required]),
    dateAttention: new FormControl('',[Validators.required]),
    hour: new FormControl('',[Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddClientAppointmentComponent>,private http:HttpClient,private appointmentsService:AppointmentsService,
  @Inject(MAT_DIALOG_DATA) public  data: {applianceModel:ApplianceModel[],selected:string,appointment:Appointment} ,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    this.data.appointment.dateReserve=this.appointmentFormGroup.get("dateReserve")?.value;
    this.data.appointment.dateAttention=this.appointmentFormGroup.get("dateAttention")?.value;
    this.data.appointment.hour=this.appointmentFormGroup.get("hour")?.value;
  }
}
