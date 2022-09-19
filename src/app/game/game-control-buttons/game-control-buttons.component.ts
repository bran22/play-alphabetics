import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GameStatus } from '../game.utils';
import { correctButtonClicked, skipButtonClicked, penalizeButtonClicked } from '../store/game.ui.actions';

@Component({
  selector: 'app-game-control-buttons',
  templateUrl: './game-control-buttons.component.html',
  styleUrls: ['./game-control-buttons.component.less']
})
export class GameControlButtonsComponent {

  @Input() gameStatus: GameStatus | null = null;

  constructor(
    private store: Store,
    private router: Router
  ) { }

  correct(): void {
    this.store.dispatch(correctButtonClicked());
  }

  skip(): void {
    this.store.dispatch(skipButtonClicked());
  }

  penalize(): void {
    this.store.dispatch(penalizeButtonClicked());
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

}
