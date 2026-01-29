import { Component } from '@angular/core';
import { AuthenticationService } from '../services/auth/auth.service';
import { AuthenticationRequest } from '../model/AuthenticationRequest';
import { AuthenticationResponse } from '../model/AuthenticationResponse';
import { RegisterRequest } from '../model/RegisterRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  loginRequest: AuthenticationRequest = {
    email: '',
    password: ''
  };

  registerRequest: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };



  constructor(private authService: AuthenticationService,
    private router: Router) { }
  login() {
    this.authService.login(this.loginRequest)
      .subscribe(
        (response: AuthenticationResponse) => {
          console.log('Server Response:', response);
          // Store the user role in localStorage
          localStorage.setItem('userRole', response.role);

          // Handle the login response
          console.log('Login successful!');
          console.log('Token: ', response.token);
          console.log('Role: ', response.role);

          // Other properties: response.id, response.firstname, response.lastname, response.email, response.roles

          // Retrieve the user role from localStorage
          const userRole = localStorage.getItem('userRole');
          console.log('userrole:', userRole);

          if (userRole === 'ROLE_ETUDIANT') {
            // Redirect to the student page

            this.router.navigate(['/etudiant']);

          } else if (userRole === 'ROLE_UNIVERSITE') {

            // Redirect to the university page
            this.router.navigate(['/backfront']);

        } else if (userRole === 'ROLE_ADMIN') {

          // Redirect to the university page
          this.router.navigate(['/backend']);
        } else {
            console.error('Unknown role:', userRole);
          }
        },
        error => {
          // Log the complete error object
          console.error('Error during login:', error);
          alert("mot de pass incorrect")
          // You can also log specific properties of the error if available
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          // Add more properties as needed

          // You can also check for a specific status code and provide a custom message
          if (error.status === 403) {
            console.error('Unauthorized access. Please check your credentials.');
          }
        }
      );
  }



}
