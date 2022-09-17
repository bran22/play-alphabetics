import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, finalize, map, switchMap, take, tap, timer, withLatestFrom } from 'rxjs';
import { gameComponentInitialized, gameEnded } from './store/game.actions';
import { beginGameButtonClicked, correctButtonClicked, skipButtonClicked } from './store/game.ui.actions';
import { selectGameEnded, selectGameLetters, selectGameStarted, selectGameWords } from './store/game.reducer';
import { selectCurrentWord } from './store/game.selectors';
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
  gameLetters$ = this.store.select(selectGameLetters);
  gameWords$ = this.store.select(selectGameWords);
  timer$ = this.store.select(selectGameStarted).pipe(
    filter( startGame => startGame ),
    withLatestFrom(this.store.select(selectTimerLength)),
    switchMap( ([_, timerLength]) => timer(0, 1000).pipe(
      take(timerLength + 1),
      map( secondsElapsed => timerLength - secondsElapsed ),
      finalize( () => this.store.dispatch(gameEnded()) )
    )),
  );
  currentWord$ = this.store.select(selectCurrentWord);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(gameComponentInitialized());
  }

  beginGame(): void {
    this.store.dispatch(beginGameButtonClicked());
  }

  onCorrect(): void {
    this.store.dispatch(correctButtonClicked());
  }

  onSkip(): void {
    this.store.dispatch(skipButtonClicked());
  }

}
