import { Component, OnInit } from '@angular/core';
import { GameResult } from '../models/game-result.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-scoreboard-component',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']

})
export class ScoreboardComponent implements OnInit {
  scores: GameResult[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getScores().subscribe(data => {
      this.scores = data;
    });
  }
}