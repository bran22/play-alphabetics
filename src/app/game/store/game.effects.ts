import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, filter, map, withLatestFrom } from 'rxjs';
import { getGameLetters, getGameWords } from '../game.utils';
import { gameComponentInitialized, gameEndedByCompletion, gameEndedByTime, gameTimerTick, gotGameLetters, gotGameWords, initializeRemainingTime, remainingWordIndicesGenerated, showGameResults } from './game.actions';
import { allWords, alphabet } from '../words';
import { correctButtonClicked, penalizeButtonClicked, playAgainButtonClicked } from './game.ui.actions';
import { selectRemainingTime, selectRemainingWordIndices } from './game.reducer';
import { Store } from '@ngrx/store';
import { selectNumWords, selectTimerLength } from 'src/app/settings/store/settings.reducer';
import { range } from '~shared/utils';

@Injectable()
export class GameEffects {

  initializeTimer$ = createEffect(
    () => this.actions$.pipe(
      ofType(gameComponentInitialized, playAgainButtonClicked),
      withLatestFrom(this.store.select(selectTimerLength)),
      map( ([_, remainingTime]) => initializeRemainingTime({remainingTime}) )
    )
  );

  getRemainingWordIndices$ = createEffect(
    () => this.actions$.pipe(
      ofType(gameComponentInitialized, playAgainButtonClicked),
      withLatestFrom(this.store.select(selectNumWords)),
      map( ([_, numWords]) => range(numWords)),
      map( (remainingWordIndices) => remainingWordIndicesGenerated({remainingWordIndices}) )
    )
  );
 
  getGameLetters$ = createEffect(
    () => this.actions$.pipe(
      ofType(gameComponentInitialized, playAgainButtonClicked),
      withLatestFrom(this.store.select(selectNumWords)),
      map( ([_, numWords]) => {
        const startingLetterIndex = Math.round(
          Math.random() * (alphabet.length - numWords)
        );
        return getGameLetters(numWords, startingLetterIndex, alphabet);
      }),
      map( (gameLetters) => gotGameLetters({gameLetters}) )
    )
  );

  getGameWords$ = createEffect(
    () => this.actions$.pipe(
      ofType(gotGameLetters),
      map( ({gameLetters}) => getGameWords(gameLetters, allWords) ),
      map( (gameWords) => gotGameWords({gameWords}) )
    )
  );

  endGameByCompletion$ = createEffect(
    () => this.actions$.pipe(
      ofType(correctButtonClicked, penalizeButtonClicked),
      withLatestFrom(this.store.select(selectRemainingWordIndices)),
      filter( ([_, remaining]) => remaining.length === 0),
      map( () => gameEndedByCompletion() )
    )
  );

  endGameByTime$ = createEffect(
    () => this.actions$.pipe(
      ofType(gameTimerTick),
      withLatestFrom(this.store.select(selectRemainingTime)),
      filter( ([_, remainingTime]) => remainingTime <= 0 ),
      map( () => gameEndedByTime() )
    )
  );

  showGameResults$ = createEffect(
    () => this.actions$.pipe(
      ofType(gameEndedByCompletion, gameEndedByTime),
      delay(3000),
      map( () => showGameResults() )
    )
  );
 
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
