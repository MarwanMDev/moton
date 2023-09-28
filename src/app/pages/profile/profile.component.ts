import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  successMessage: boolean = false;
  updateUserForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl(null, [Validators.required]),
  });

  updatePasswordForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private profileService: ProfileService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((res) => {
      this.updateUserForm.patchValue({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
      });
    });
  }

  handelUpdateUser(updateUserForm: FormGroup) {
    if (updateUserForm.valid) {
      this.profileService
        .updateUserProfile(updateUserForm.value)
        .subscribe({
          next: (response) => {
            this.successMessage = true;
          },
          error: (err) => console.log(err),
        });
    }
  }

  handelUpdatePasswordForm(updatePasswordForm: FormGroup) {
    if (updatePasswordForm.valid) {
      this.profileService
        .changeUserPassword(updatePasswordForm.value)
        .subscribe({
          next: (response: any) => {
            this.storageService.clean();
            this.storageService.saveUser(
              response.data,
              response.token
            );
            this.successMessage = true;
          },
          error: (err) => {},
        });
      console.log(updatePasswordForm.value);
    }
  }
}
