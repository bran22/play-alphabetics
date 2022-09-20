import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, filter, interval, map, switchMap, takeUntil } from 'rxjs';
import { gameComponentInitialized, gameTimerTick } from './store/game.actions';
import { beginGameButtonClicked, playAgainButtonClicked } from './store/game.ui.actions';
import { selectGameEnded, selectGameStarted, selectRemainingTime, selectRemainingWordIndices } from './store/game.reducer';
import { selectCurrentWord, selectGameStatus, selectGameWordDetails } from './store/game.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit, OnDestroy {

  componentIsDestroyed$$ = new BehaviorSubject(false);
  componentIsDestroyed$ = this.componentIsDestroyed$$.asObservable();
  gameStatus$ = this.store.select(selectGameStatus);
  gameWordDetails$ = this.store.select(selectGameWordDetails);
  currentWord$ = this.store.select(selectCurrentWord);
  remainingTime$ = this.store.select(selectRemainingTime);
  gameHasEnded$ = combineLatest([
    this.store.select(selectGameEnded),
    this.componentIsDestroyed$
  ]).pipe(
    filter( ([gameEnded, componentDestroyed]) => gameEnded || componentDestroyed )
  );
  timer$ = this.store.select(selectGameStarted).pipe(
    filter(gameStarted => gameStarted),
    switchMap(() => interval(1000).pipe(
      map( () => this.store.dispatch(gameTimerTick())),
    )),
    takeUntil(this.gameHasEnded$)
  );

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(gameComponentInitialized());
  }

  ngOnDestroy(): void {
    this.componentIsDestroyed$$.next(true);
  }

  beginGame(): void {
    this.timer$.subscribe();  // only subscribe to the timer observable when the game is going
    this.store.dispatch(beginGameButtonClicked());
  }

  playAgain(): void {
    this.store.dispatch(playAgainButtonClicked());
  }

}
