import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) { }
  
 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let jwtservice=this.injector.get(JwtService);
    if(jwtservice.loggedIn())
    {
      let tokenReq=req.clone({
        setHeaders:{
          Authorization:`Bearer ${jwtservice.getToken()}`,
        
        }
      })
      return next.handle(tokenReq)
    }
    else{
      return next.handle(req)
    }
    
  }

}
