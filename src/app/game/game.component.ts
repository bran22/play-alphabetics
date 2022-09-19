import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, finalize, map, switchMap, take, timer, withLatestFrom } from 'rxjs';
import { gameComponentInitialized, gameEnded } from './store/game.actions';
import { beginGameButtonClicked, playAgainButtonClicked } from './store/game.ui.actions';
import { selectGameStarted, selectGameWords, selectRemainingWordIndices } from './store/game.reducer';
import { selectCurrentWord, selectGameLettersWithInfo, selectGameStatus } from './store/game.selectors';
import { selectTimerLength } from '../settings/store/settings.reducer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  gameStatus$ = this.store.select(selectGameStatus);
  gameLetters$ = this.store.select(selectGameLettersWithInfo);
  gameWords$ = this.store.select(selectGameWords);
  currentWord$ = this.store.select(selectCurrentWord);
  remainingIndices$ = this.store.select(selectRemainingWordIndices);
  timer$ = this.store.select(selectGameStarted).pipe(
    filter( startGame => startGame ),
    withLatestFrom(this.store.select(selectTimerLength)),
    switchMap( ([_, timerLength]) => timer(0, 1000).pipe(
      take(timerLength + 1),
      map( secondsElapsed => timerLength - secondsElapsed ),
      finalize( () => this.store.dispatch(gameEnded()) )
    )),
  );

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(gameComponentInitialized());
  }

  beginGame(): void {
    this.store.dispatch(beginGameButtonClicked());
  }

  playAgain(): void {
    this.store.dispatch(playAgainButtonClicked());
  }

}
