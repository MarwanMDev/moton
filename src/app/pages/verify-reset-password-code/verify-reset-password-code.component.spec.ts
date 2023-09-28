import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyResetPasswordCodeComponent } from './verify-reset-password-code.component';

describe('VerifyResetPasswordCodeComponent', () => {
  let component: VerifyResetPasswordCodeComponent;
  let fixture: ComponentFixture<VerifyResetPasswordCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyResetPasswordCodeComponent]
    });
    fixture = TestBed.createComponent(VerifyResetPasswordCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
