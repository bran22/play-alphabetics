import { Component, Input } from '@angular/core';
import { GameStatus } from '../game.utils';
import { GameWordDetails } from '../word.models';

@Component({
  selector: 'app-results-summary',
  templateUrl: './results-summary.component.html',
  styleUrls: ['./results-summary.component.less']
})
export class ResultsSummaryComponent {

  @Input() gameStatus: GameStatus | null = null;
  @Input() gameWordDetails: GameWordDetails[] | null = null;

  constructor() { }

}
