import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-transparent-navbar',
  templateUrl: './transparent-navbar.component.html',
  styleUrls: ['./transparent-navbar.component.scss']
})
export class TransparentNavbarComponent {
  currentRoute: string = ''; // Initialize with an empty string

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Get the current route
        this.currentRoute = event.url;
      }
    });
  }
  navigateToHomeRestaurant() {
    this.router.navigate(['/home-restaurant']);
  }
  // Function to check if a route is the current route
  isRouteActive(route: string): boolean {
    return this.currentRoute === route;
  }

  chambre(){
    this.router.navigate(['gestion-chambre/show-chambre'])
  }
}
