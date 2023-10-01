import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';
import { ShowComponent } from './pages/show/show.component';
import { EventsComponent } from './pages/events/events.component';
import { EventInfoComponent } from './pages/event-info/event-info.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from '../../src/app/auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForgottenpasswordComponent } from './pages/forgottenpassword/forgottenpassword.component';
import { PasswordValidationComponent } from './pages/password-validation/password-validation.component';
import { VerifyResetPasswordCodeComponent } from './pages/verify-reset-password-code/verify-reset-password-code.component';
import { OrderComponent } from './pages/order/order.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymentCompletedComponent } from './pages/payment-completed/payment-completed.component';
import { ViewPdfComponent } from './pages/view-pdf/view-pdf.component';
import { PaymobPaymentSuccessComponent } from './pages/paymob-payment-success/paymob-payment-success.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'forgotten-password',
    component: ForgottenpasswordComponent,
  },
  {
    path: 'verify-reset-password-code',
    component: VerifyResetPasswordCodeComponent,
  },
  {
    path: 'password-validation',
    component: PasswordValidationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [authGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'books/:type', component: BooksComponent },
  { path: 'view-pdf/:id', component: ViewPdfComponent },
  {
    path: 'show/:id',
    component: ShowComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  { path: 'event-info/:event', component: EventInfoComponent },
  { path: 'category/:language', component: CategoryComponent },
  {
    path: 'payment/:cartId',
    component: PaymentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'paypal/payment/success',
    component: PaymentSuccessComponent,
    canActivate: [authGuard],
  },
  {
    path: 'paymob/payment/success',
    component: PaymobPaymentSuccessComponent,
    canActivate: [authGuard],
  },
  {
    path: 'success/payment/completed',
    component: PaymentCompletedComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
