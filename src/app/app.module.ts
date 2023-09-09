import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from'@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
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
         SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
