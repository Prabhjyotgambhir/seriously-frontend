import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): Promise<boolean> | boolean {
    let accessToken: string;
    if (isPlatformBrowser(this.platformId)) {
      accessToken = this.authService.token;
    }
    if (accessToken) {
      return true;
    }
    // Navigate to the login page with extras
    this.router.navigate(['/admin']);
    return false;
  }
}
