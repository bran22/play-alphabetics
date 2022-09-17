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

  constructor(
    private store: Store,
    private router: Router
  ) { }

  storeNumWords(value: string): void {
    const numWords = value ? +value : 1;
    this.store.dispatch(numWordsInputChanged({numWords}));
  }

  storeGameLength(value: string): void {
    const timerLength = value ? +value : 1;
    this.store.dispatch(gameLengthInputChanged({timerLength}));
  }

  navigateHome(): void {
    this.router.navigate(['/'])
  }

}
