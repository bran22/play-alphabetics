import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterCardComponent } from './letter-card.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    LetterCardComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  exports: [
    LetterCardComponent
  ]
})
export class LetterCardModule { }
