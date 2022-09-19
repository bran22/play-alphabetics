import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { StoreModule } from '@ngrx/store';
import { gameFeature } from './store/game.reducer';
import { LetModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/game.effects';
import { LetterCardModule } from '~shared/components/letter-card/letter-card.module';
import { ClarityModule } from '@clr/angular';
import { GameControlButtonsComponent } from './game-control-buttons/game-control-buttons.component';

@NgModule({
  declarations: [
    GameComponent,
    GameControlButtonsComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    LetModule,
    StoreModule.forFeature(gameFeature),
    EffectsModule.forFeature([GameEffects]),
    LetterCardModule
  ]
})
export class GameModule { }
