import { Component } from '@angular/core';
import { PasswordResetService } from '../services/auth/password-reset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private passwordResetService: PasswordResetService,private router: Router) {}

  requestPasswordReset() {
    this.passwordResetService.requestPasswordReset(this.email).subscribe(
      (response) => {
        console.log('Password reset response:', response); // Handle success, e.g., show a success message
        this.router.navigate(['/check-email']);

        // Add any additional logic based on the response
      },
      (error) => {
        console.error(error); // Handle error, e.g., show an error message
      }
    );
  }    
}
