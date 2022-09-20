import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { range } from '~shared/utils';
import { gameLengthChanged, numWordsInputChanged } from './store/settings.actions';
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
  numWordsPlaceholder = `${this.numWordsRange.min} - ${this.numWordsRange.max}`;
  timeOptions = range(12).map( x => (x + 1) * 15 );

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
    this.store.dispatch(gameLengthChanged({timerLength: +value}));
  }

  navigateHome(): void {
    this.router.navigate(['/'])
  }

}
