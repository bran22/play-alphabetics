import { Component, OnInit } from '@angular/core';
import { allWords, alphabet, Letter, WordList } from './words';

const getRandomWord = (words: string[]): string => words[Math.floor(Math.random() * words.length)];
const getGameWords = (startingLetterIndex: number, allWords: WordList): string[] => {
  return alphabet
    .slice(startingLetterIndex, startingLetterIndex + 10)
    .map( letter => allWords[letter] )
    .map( getRandomWord );
}
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.less']
})
export class PlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const startingLetterIndex = Math.round(
      Math.random() * (alphabet.length - 10)
    );
    const gameWords = getGameWords(startingLetterIndex, allWords);
    console.log(gameWords);
  }

}
