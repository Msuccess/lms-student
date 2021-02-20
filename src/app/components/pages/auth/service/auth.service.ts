import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signin(value: any) {
    return of();
  }

  constructor() {}
}
