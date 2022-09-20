import { Component, Input } from '@angular/core';
import { GameWordDetails } from '../word.models';

@Component({
  selector: 'app-letter-row',
  templateUrl: './letter-row.component.html',
  styleUrls: ['./letter-row.component.less']
})
export class LetterRowComponent {

  @Input() wordDetails: GameWordDetails[] | null = null;

  constructor() { }

}
