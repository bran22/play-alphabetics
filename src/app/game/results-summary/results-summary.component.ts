import { Component, Input, OnChanges } from '@angular/core';
import { GameStatus } from '../game.utils';
import { GameWordDetails } from '../word.models';

const computeScore = (correctWords: number, maxWords: number, dollarsPerCorrect: number, bonusIfAllCorrect: number): number =>
  correctWords * dollarsPerCorrect + (correctWords === maxWords ? bonusIfAllCorrect : 0);
@Component({
  selector: 'app-results-summary',
  templateUrl: './results-summary.component.html',
  styleUrls: ['./results-summary.component.less']
})
export class ResultsSummaryComponent implements OnChanges {

  @Input() gameStatus: GameStatus | null = null;
  @Input() gameWordDetails: GameWordDetails[] | null = null;
  @Input() remainingTime: number | null = null;
  @Input() skipCount: number | null = null;
  dollarsPerCorrectWord = 1000;
  bonusIfAllCorrect = 15000;
  score: number | undefined = 0;
  gotBonus: boolean = false;

  constructor() { }

  ngOnChanges() {
    const correctWords = this.gameWordDetails?.filter( word => word.correct ).length ?? 0;
    const maxWords = this.gameWordDetails?.length ?? 0;
    this.gotBonus = correctWords === maxWords;
    this.score = computeScore(correctWords, maxWords, this.dollarsPerCorrectWord, this.bonusIfAllCorrect);
  }

}
