import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectNumWords, selectTimerLength } from './store/settings.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  numWords$ = this.store.select(selectNumWords);
  gameLength$ = this.store.select(selectTimerLength);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

}
