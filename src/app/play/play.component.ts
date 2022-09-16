import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, filter, interval, map, switchMap, take, timer } from 'rxjs';
import { beginGameButtonClicked } from './play.actions';
import { selectGameStarted } from './play.reducer';
import { allWords, alphabet, Letter, WordList } from './words';

const getGameLetters = (startingLetterIndex: number, alphabet: Letter[]) => alphabet.slice(startingLetterIndex, startingLetterIndex + 10);
const getRandomWord = (words: string[]): string => words[Math.floor(Math.random() * words.length)];
const getGameWords = (gameLetters: Letter[], allWords: WordList): string[] => {
  return gameLetters
    .map( letter => allWords[letter] )
    .map( getRandomWord );
}
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.less']
})
export class PlayComponent implements OnInit {

  gameLetters: Letter[] = [];
  gameWords: string[] = [];
  timer$ = this.store.select(selectGameStarted).pipe(
    filter( startGame => startGame ),
    switchMap( () => timer(0, 1000).pipe(
      take(60)
    )),
    map( secondsElapsed => 59 - secondsElapsed )
  );

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    const startingLetterIndex = Math.round(
      Math.random() * (alphabet.length - 10)
    );
    this.gameLetters = getGameLetters(startingLetterIndex, alphabet);
  }

  beginGame(gameLetters: Letter[]) {
    this.store.dispatch(beginGameButtonClicked());
    this.gameWords = getGameWords(gameLetters, allWords);
    console.log('this.gamewords', this.gameWords);
  }

}
