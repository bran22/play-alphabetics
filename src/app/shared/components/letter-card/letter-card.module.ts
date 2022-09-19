import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterCardComponent } from './letter-card.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    LetterCardComponent
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    LetterCardComponent
  ]
})
export class LetterCardModule { }
