import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';
import { ShowComponent } from './pages/show/show.component';
import { EventsComponent } from './pages/events/events.component';
import { EventInfoComponent } from './pages/event-info/event-info.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SharedModule } from './shared/shared.module';
import { TranslocoRootModule } from './transloco-root.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { CartService } from './services/cart/cart.service';
import { AuthInterceptor } from './auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { EventFormService } from './services/event/event-form.service';
import { FilterPipe } from './pipes/filter.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileService } from './services/profile/profile.service';
import { ForgottenpasswordComponent } from './pages/forgottenpassword/forgottenpassword.component';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { AutoCompleteComponent } from './shared/components/auto-complete/auto-complete.component';
import { SortPipe } from './pipes/sort.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { PasswordValidationComponent } from './pages/password-validation/password-validation.component';
import { VerifyResetPasswordCodeComponent } from './pages/verify-reset-password-code/verify-reset-password-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BooksComponent,
    PaymentComponent,
    LoginComponent,
    NewsComponent,
    ShowComponent,
    EventsComponent,
    EventInfoComponent,
    CategoryComponent,
    SignupComponent,
    FilterPipe,
    ProfileComponent,
    ForgottenpasswordComponent,
    StarRatingComponent,
    AutoCompleteComponent,
    SortPipe,
    CategoryPipe,
    PasswordValidationComponent,
    VerifyResetPasswordCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    TranslocoRootModule,
    GoogleMapsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    EventFormService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    SortPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
