import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, retry, switchMap, throwError} from "rxjs";
import {User} from "../model/user";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Endpoint
  basePath = 'http://localhost:8080/api/v1/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  GetHttpOptionsWithToken(token: any){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
  }

  currentUser!: User;
  private _authenticated: boolean = false;
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

  set accessToken(token: string)
  {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string
  {
    return localStorage.getItem('accessToken') ?? '';
  }

  get isSignedIn(): boolean{
    let accessToken = localStorage.getItem('accessToken');
    return accessToken != null;
  }
  verifyTokenClient(): Observable<boolean> {
    return this.http.get<boolean>(`${this.basePath}/auth/verify-token-client`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  verifyTokenTechnician(): Observable<boolean> {
    return this.http.get<boolean>(`${this.basePath}/auth/verify-token-technician`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  authenticateUser(item: any): Observable<User> {
    return this.http.post<User>(`${this.basePath}/auth/sign-in`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  registerUser(item: any): Observable<User> {
    return this.http.post<User>(`${this.basePath}/auth/sign-up`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All
  getAllUsers(): Observable<User> {
    return this.http.get<User>(`${this.basePath}/auth/get-all`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


}
