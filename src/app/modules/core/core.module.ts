import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtService } from './services/jwt.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteGuard } from './services/route.guard';

import { LoggingInterceptor } from './services/logging.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    JwtService,
    RouteGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoggingInterceptor,
      multi: true
    }

  ]
})
export class CoreModule { }
