import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-verify-reset-password-code',
  templateUrl: './verify-reset-password-code.component.html',
  styleUrls: ['./verify-reset-password-code.component.css'],
})
export class VerifyResetPasswordCodeComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      window.location.replace('/home');
    }
  }

  resetPasswordCodeValidationForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });

  handelResetPasswordCodeValidationForm(
    resetPasswordCodeValidationForm: FormGroup
  ) {
    if (resetPasswordCodeValidationForm.valid) {
      this.loading = true;
      this.authService
        .verifyResetCode(resetPasswordCodeValidationForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            if (response.status === 'Success') {
              this.loading = false;
              this.router.navigate(['/password-validation']);
            }
          },
          error: (err) => {
            this.loading = false;
            this.errorMessage = err.error.message;
          },
        });
    }
  }
}
