import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import {Observable} from "rxjs";
import {UsersService} from "../users/services/users.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let usersService = this.injector.get(UsersService)
    let token = req.clone({
      setHeaders:{
        Authorization: `Bearer ${usersService.getToken()}`
      }
    })
    return next.handle(token);
  }
}
