import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Client} from "../model/client";


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  // Endpoint
  basePath = 'http://localhost:8080/api/v1/clients';

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

  create(item: any): Observable<Client> {
    return this.http.post<Client>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  getById(id: any): Observable<Client> {
    return this.http.get<Client>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All
  getAll(): Observable<Client> {
    return this.http.get<Client>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getByEmail(email: any): Observable<Client> {
    return this.http.get<Client>(`${this.basePath}/email/${email}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getByUsername(username: any): Observable<Client> {
    return this.http.get<Client>(`${this.basePath}/username/${username}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  // Update
  update(id: any, item: any): Observable<Client> {
    return this.http.put<Client>(`${this.basePath}/${id}`, item, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  updatePlan(clientId: any, planId: any, item: any): Observable<Client> {
    return this.http.put<Client>(`${ this.basePath }/${ clientId }/plan/${ planId }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Delete
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
