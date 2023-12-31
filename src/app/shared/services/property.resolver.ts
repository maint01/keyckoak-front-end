import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import {AuthzService} from '@core/services/authz.service';
import {AppStorage} from '@core/services/AppStorage';

@Injectable({
    providedIn: 'root'
})
export class PropertyResolver implements Resolve<any> {

  constructor(private apiAuthzService: AuthzService) {}

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any>  {
    const params = new HttpParams({
      fromObject: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        grant_type : 'urn:ietf:params:oauth:grant-type:uma-ticket',
        audience : 'my-client-id',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        response_mode : 'permissions',
      }
    });

    // TODO: get permission resource by resource
    return this.apiAuthzService.checkPermissionResourceName(params)
            .pipe(
                tap( // Log the result or error
                    (res) => {
                      console.log(res);
                      AppStorage.setResourcePermission(res);
                    },
                    (error) => {
                      AppStorage.setResourcePermission(null);
                    }
                  ),
                catchError((err) => {
                    console.log('Handling error locally and rethrowing it...', err);
                    return of({});
              })
            );
  }
}
