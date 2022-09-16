import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, finalize, map, switchMap, take, tap, timer } from 'rxjs';
import { beginGameButtonClicked, gameComponentInitialized, gameEnded } from './store/game.actions';
import { selectGameEnded, selectGameLetters, selectGameStarted, selectGameWords } from './store/game.reducer';
import { selectCurrentWord } from './store/game.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  timerLength = 5;
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
    switchMap( () => timer(0, 1000).pipe(
      take(this.timerLength + 1),
      finalize( () => this.store.dispatch(gameEnded()))
    )),
    map( secondsElapsed => this.timerLength - secondsElapsed )
  );
  currentWord$ = this.store.select(selectCurrentWord);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(gameComponentInitialized());
  }

  beginGame() {
    this.store.dispatch(beginGameButtonClicked());
  }

}
