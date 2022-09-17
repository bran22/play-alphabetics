import { Component, Input, OnInit } from '@angular/core';
import { LetterInfo } from 'src/app/game/word.models';

@Component({
  selector: 'app-letter-card',
  templateUrl: './letter-card.component.html',
  styleUrls: ['./letter-card.component.less']
})
export class LetterCardComponent implements OnInit {

  @Input() letterInfo: LetterInfo | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
