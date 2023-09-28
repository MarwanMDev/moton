import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from 'src/app/services/contact/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  });

  constructor(
    private title: Title,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Moton - contact');
  }

  handelContactForm(contactForm: FormGroup) {
    if (contactForm.valid) {
      this.contactService
        .createNewContact(contactForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
