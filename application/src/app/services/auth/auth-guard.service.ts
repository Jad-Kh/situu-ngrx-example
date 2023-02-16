import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";
import { AppState } from "src/app/state/app.state";

@Injectable({
    providedIn: "root",
})

export class AuthGuard implements CanActivate {

    isLoggedIn: boolean = false;
    isAuth$ = this.store.select(state => state.auth.isAuthenticated)

    constructor(private router: Router, private store: Store<AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      this.isAuth$.subscribe(
        isAuthenticated => {
          this.isLoggedIn = isAuthenticated;
        }
      )
      if(!this.isLoggedIn) {
          this.router.navigate(["login"]);
      }
      return this.isAuth$;
    }
}