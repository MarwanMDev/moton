import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-forgottenpassword',
  templateUrl: './forgottenpassword.component.html',
  styleUrls: ['./forgottenpassword.component.css'],
})
export class ForgottenpasswordComponent implements OnInit {
  loading: boolean = false;

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

  restorePasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  });

  handelRestorePasswordForm(restorePasswordForm: FormGroup) {
    if (restorePasswordForm.valid) {
      this.loading = true;
      this.authService
        .forgotPassword(restorePasswordForm.value)
        .subscribe({
          next: (response) => {
            if (response.status === 'Success') {
              this.router.navigate(['/verify-reset-password-code']);
            }
          },
          error: (err) => console.log(err),
        });
    }
  }
}
