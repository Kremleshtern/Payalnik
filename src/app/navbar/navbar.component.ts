import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isExpanded = false;
  constructor(private authService: AuthenticationService) {
    
  }
  isLoggedIn = this.authService.isLoggedIn();
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logout() {
    localStorage.clear();
  }
}
