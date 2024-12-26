import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from './Services/services.service';

@Injectable()
export class tokenInterceptor implements HttpInterceptor {

  constructor(private services:ServicesService){}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = {};
    const localtoken = localStorage.getItem('token')
    if(localtoken!= null){
      token = JSON.parse(localtoken)

    }
    const modifiedRequest = request.clone({
      setHeaders: {

        Authorization: 'Bearer '+token

      }
    });
    return next.handle(modifiedRequest);
  }
}
