import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, finalize, map, switchMap, take, timer, withLatestFrom } from 'rxjs';
import { gameComponentInitialized, gameEnded } from './store/game.actions';
import { beginGameButtonClicked, correctButtonClicked, playAgainButtonClicked, skipButtonClicked } from './store/game.ui.actions';
import { selectGameEnded, selectGameStarted, selectGameWords, selectRemainingWordIndices } from './store/game.reducer';
import { selectCurrentWord, selectGameLettersWithInfo } from './store/game.selectors';
import { selectTimerLength } from '../settings/store/settings.reducer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  gameState$ = combineLatest([
    this.store.select(selectGameStarted),
    this.store.select(selectGameEnded)
  ]).pipe(
    map( ([started, ended]) => ({started, ended}) )
  );
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(gameComponentInitialized());
  }

  beginGame(): void {
    this.store.dispatch(beginGameButtonClicked());
  }

  correct(): void {
    this.store.dispatch(correctButtonClicked());
  }

  skip(): void {
    this.store.dispatch(skipButtonClicked());
  }

  penalize(): void {
    // this.store.dispatch(correctButtonClicked());
  }

  playAgain(): void {
    this.store.dispatch(playAgainButtonClicked());
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

}
