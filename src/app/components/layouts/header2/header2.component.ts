import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../pages/auth/service/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css'],
})
export class Header2Component implements OnInit {
  authenticatedUser = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {}

  getCurrentUser(): void {
    if (this.authService.getToken()) {
      this.authenticatedUser.next(true);
    }
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }
}
