export interface Appointment{
  id:number;
  clientId:number;
  dateReserve:string;
  dateAttention:string;
  hour:string;
  applianceModelId:number;
  applianceModel:{urlToImage:string,name:string,model:string};
}
