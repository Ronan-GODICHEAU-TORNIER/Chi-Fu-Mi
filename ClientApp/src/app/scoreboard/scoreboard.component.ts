import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard-component',
  templateUrl: './scoreboard.component.html'
})
export class ScoreboardComponent {

  constructor() {
  }
}

interface GameResult {
  id: number;
  playerHand: number;
  computerHand: number;
  result: string;
}
