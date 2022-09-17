import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs';
import { getGameLetters, getGameWords } from '../game.utils';
import { gameComponentInitialized, gameEnded, gotGameLetters, gotGameWords, remainingWordIndicesGenerated } from './game.actions';
import { allWords, alphabet } from '../words';
import { correctButtonClicked } from './game.ui.actions';
import { selectRemainingWordIndices } from './game.reducer';
import { Store } from '@ngrx/store';
import { selectNumWords } from 'src/app/settings/store/settings.reducer';

const range = (num: number) => [...Array(num).keys()];

@Injectable()
export class GameEffects {

  getRemainingWordIndices$ = createEffect(
    () => this.actions$.pipe(
      ofType(gameComponentInitialized),
      withLatestFrom(this.store.select(selectNumWords)),
      map( ([_, numWords]) => range(numWords)),
      map( (remainingWordIndices) => remainingWordIndicesGenerated({remainingWordIndices}) )
    )
  );
 
  getGameLetters$ = createEffect(
    () => this.actions$.pipe(
      ofType(gameComponentInitialized),
      map( () => {
        const startingLetterIndex = Math.round(
          Math.random() * (alphabet.length - 10)
        );
        return getGameLetters(startingLetterIndex, alphabet);
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

  advanceCurrentWord$ = createEffect(
    () => this.actions$.pipe(
      ofType(correctButtonClicked),
      withLatestFrom(this.store.select(selectRemainingWordIndices)),
      filter( ([_, remaining]) => remaining.length === 0),
      map( () => gameEnded() )
    )
  );
 
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
