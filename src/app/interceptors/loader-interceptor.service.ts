import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import {tap} from 'rxjs/internal/operators';
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loadingBarService: SlimLoadingBarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // start our loader here
    this.loadingBarService.start();

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      // if the event is for http response
      if (event instanceof HttpResponse) {
        // stop our loader here
        this.loadingBarService.complete();
      }

    }, (err: any) => {
      // if any error (not for just HttpResponse) we stop our loader bar
      this.loadingBarService.complete();
    }));
  }
}
