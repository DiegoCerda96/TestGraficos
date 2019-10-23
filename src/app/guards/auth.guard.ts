import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afsAuth: AngularFireAuth, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('next.data.role: ' + next.data.role)
    return this.afsAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !!authState))
      .pipe(tap(auth => {
        // console.log('auth' + auth)
        if (!auth) {
          this.router.navigate(['/login']);
        } else
          if (localStorage.getItem('userRole') === next.data.expectedRole || next.data.expectedRole === undefined) {
            return true;
          } else {
            this.router.navigate(['']);
          }

      }));
  }
}

