import { Component } from '@angular/core';
import { AuthenticationService } from '../services/auth/auth.service';
import { RegisterRequest } from '../model/RegisterRequest';
import { AuthenticationResponse } from '../model/AuthenticationResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  registerRequest: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthenticationService, private router: Router) { }

  register() {
    this.authService.register(this.registerRequest)
      .subscribe((response: AuthenticationResponse) => {
        // Traitement de la réponse de l'API
        console.log('Inscription réussie !');
        console.log('Token JWT :', response.jwtToken);
        // Vous pouvez également effectuer d'autres actions ici, comme rediriger l'utilisateur vers une autre page.
        console.log('full response :', response);
        // Redirect to the login page after successful registration
      this.router.navigate(['/login']);
      }, error => {
        // Gestion des erreurs
        console.error('Erreur lors de linscription :', error);
      });

  }
}
