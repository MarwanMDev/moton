import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslocoRootModule } from '../transloco-root.module';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LanguageSelectorComponent,
  ],
  imports: [CommonModule, RouterModule, TranslocoRootModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
