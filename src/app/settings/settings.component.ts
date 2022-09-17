import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { gameLengthInputChanged, numWordsInputChanged } from './store/settings.actions';
import { selectNumWords, selectTimerLength } from './store/settings.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent {

  numWords$ = this.store.select(selectNumWords);
  gameLength$ = this.store.select(selectTimerLength);
  numWordsRange = {min: 1, max: 26};
  gameLengthRange = {min: 10, max: 600};
  numWordsPlaceholder = `${this.numWordsRange.min} - ${this.numWordsRange.max}`;
  gameLengthPlaceholder = `${this.gameLengthRange.min} - ${this.gameLengthRange.max}`;

  constructor(
    private store: Store,
    private router: Router
  ) { }

  storeNumWords(value: string): void {
    if (+value <= this.numWordsRange.max && +value >= this.numWordsRange.min) {
      this.store.dispatch(numWordsInputChanged({numWords: +value}));
    }
  }

  storeGameLength(value: string): void {
    if (+value <= this.gameLengthRange.max && +value >= this.gameLengthRange.min) {
      this.store.dispatch(gameLengthInputChanged({timerLength: +value}));
    } 
  }

  navigateHome(): void {
    this.router.navigate(['/'])
  }

}
