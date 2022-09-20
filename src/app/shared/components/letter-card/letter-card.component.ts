import { Component, Input, OnInit } from '@angular/core';
import { GameWordDetails } from 'src/app/game/word.models';

@Component({
  selector: 'app-letter-card',
  templateUrl: './letter-card.component.html',
  styleUrls: ['./letter-card.component.less']
})
export class LetterCardComponent implements OnInit {

  @Input() wordDetails: GameWordDetails | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
