import { Component, Input } from '@angular/core';
import { GameStatus } from '../game.utils';

@Component({
  selector: 'app-game-messages',
  templateUrl: './game-messages.component.html',
  styleUrls: ['./game-messages.component.less']
})
export class GameMessagesComponent {

  @Input() gameStatus: GameStatus | null = null;
  @Input() currentWord: string | null = null;
  @Input() remainingTime: number | null = null;

  constructor() { }

}
