import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      window.location.replace('/home');
    }
  }

  handelRegister(registerForm: FormGroup) {
    if (registerForm.valid) {
      this.authService.signUp(registerForm.value).subscribe({
        next: (response) => {
          this.storageService.saveUser(response.data, response.token);
          window.location.replace('/home');
        },
        error: (err) => console.log(err),
      });
    }
  }
}
