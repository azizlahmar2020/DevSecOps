import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasswordResetService } from '../services/auth/password-reset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  token: string = '';
  newPassword: string = '';

  constructor(private route: ActivatedRoute, private passwordResetService: PasswordResetService, private router: Router) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || ''; // Use an empty string if the token is undefined
      console.log('Token from URL:', this.token);
    });
  }
  

  resetPassword() {
    this.passwordResetService.resetPassword(this.token, this.newPassword).subscribe(
      (response) => {
        console.log('Password reset response:', response);
        // Handle success, e.g., show a success message or navigate to another page
        // Redirect to the login page after successful registration
      this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }
}
