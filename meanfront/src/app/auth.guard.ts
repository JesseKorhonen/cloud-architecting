import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

// Luokalla toteutettu guard. Nykyään funktionaalinen guard on yleisempi.

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() { // Token löytyy jolloin Guard palauttaa true
        if (sessionStorage.getItem('accesstoken')) {
            return true;
        }

        // Ei Tokenia jolloin palataan login -sivulle
        this.router.navigate(['/login']);
        return false;
    }
}
