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
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'books',component:BooksComponent},
  {path:'books/electronic',component:BooksComponent},
  {path:'books/paper',component:BooksComponent},
  {path:'contact',component:ContactComponent},
  {path:'payment',component:PaymentComponent},//??
  {path:'login',component:LoginComponent},
  {path:'news',component:NewsComponent},//??
  {path:'show',component:ShowComponent},

  {path:'events',component:EventsComponent},
  {path:'event-info',component:EventInfoComponent},
  {path:'event-info/:event',component:EventInfoComponent},
  {path:'category',component:CategoryComponent},
  {path:'signup',component:SignupComponent},

  {path:'category/arabic',component:CategoryComponent},
  {path:'category/arabic/:id',component:CategoryComponent},
  {path:'category/english',component:CategoryComponent},
  {path:'category/english/:id',component:CategoryComponent},
  {path:'category/arabic/show/:categoryId',component:ShowComponent},//
  {path:'category/english/show/:categoryId',component:ShowComponent}//



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
