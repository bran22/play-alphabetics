import { Component, Input, OnInit } from '@angular/core';
import { Letter } from 'src/app/game/words';

@Component({
  selector: 'app-letter-card',
  templateUrl: './letter-card.component.html',
  styleUrls: ['./letter-card.component.less']
})
export class LetterCardComponent implements OnInit {

  @Input() letter: Letter | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
