import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {ApplianceModel} from "../model/appliancemodel";

@Injectable({
  providedIn: 'root'
})
export class AppliancesModelService {

  // Endpoint
  basePath = 'http://localhost:8080/api/v1/applianceModels';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  create(item: any,clientId:any): Observable<ApplianceModel> {
    return this.http.post<ApplianceModel>(`${this.basePath}/${ clientId }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  getById(id: any): Observable<ApplianceModel> {
    return this.http.get<ApplianceModel>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getByClientId(clientId: any):Observable<ApplianceModel> {
    return this.http.get<ApplianceModel>(`${this.basePath}/${clientId}/applianceModels`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All
  getAll(): Observable<ApplianceModel> {
    return this.http.get<ApplianceModel>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update
  update(id: any, item: any): Observable<ApplianceModel> {
    return this.http.put<ApplianceModel>(`${this.basePath}/${id}`, item, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


}
