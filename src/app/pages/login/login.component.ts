import { AuthService } from '../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(null, [Validators.required]),
  });

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      window.location.replace('/home');
    }
  }

  handelLogin(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.authService.login(loginForm.value).subscribe({
        next: (response) => {
          this.storageService.saveUser(response.data, response.token);
          window.location.replace('/home');
        },
        error: (err) => console.log(err),
      });
    }
  }
}
