import { Component, OnInit } from '@angular/core';
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

  gameLetters: Letter[] | null = null;
  gameWords: string[] | null = null;

  constructor() { }

  ngOnInit(): void {
    const startingLetterIndex = Math.round(
      Math.random() * (alphabet.length - 10)
    );
    this.gameLetters = getGameLetters(startingLetterIndex, alphabet);
  }

  beginGame(gameLetters: Letter[]) {
    this.gameWords = getGameWords(gameLetters, allWords);
  }

}
