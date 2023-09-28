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
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'books/:type', component: BooksComponent },
  {
    path: 'show/:id',
    component: ShowComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  { path: 'event-info', component: EventInfoComponent },
  { path: 'event-info/:event', component: EventInfoComponent },
  { path: 'category/:language', component: CategoryComponent },
  {
    path: 'payment/:cartId',
    component: PaymentComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
