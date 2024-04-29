import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAuth implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if(localStorage.getItem('davit')){
      return true;
    } else {
      this.router.navigate(['/login']); // If not authenticated, redirect to login
      return false;
    }
  }
}
