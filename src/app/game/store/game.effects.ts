import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { getGameLetters, getGameWords } from '../game.utils';
import { gameComponentInitialized, beginGameButtonClicked, gotGameLetters, gotGameWords } from './game.actions';
import { allWords, alphabet } from '../words';
 
@Injectable()
export class GameEffects {
 
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
 
  constructor(
    private actions$: Actions,
  ) {}
}
