import { Component } from '@angular/core';
import { Choice, GameResult, ResultType } from '../models/game-result.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-chifoumi',
  templateUrl: './chifoumi.component.html',
  styleUrls: ['./chifoumi.component.css']
})
export class ChifoumiComponent {
    constructor(private gameService:GameService) {   

    }
    playerChoice? : Choice;
    computerChoice? : Choice;
    showResultMessage = false;
    resultOfTheGame?: ResultType;
    resultMessage?:string;
    
    whowins(playerChoice :string, computerChoice:string):ResultType{
        if (playerChoice === computerChoice) {
            return ResultType.DRAW;
        }
        switch (playerChoice) {
            case 'Ciseaux':
                return (computerChoice === Choice.FEUILLE) ? ResultType.WIN : ResultType.LOSE;
            case 'Pierre':
                return (computerChoice === Choice.CISEAUX) ? ResultType.WIN : ResultType.LOSE;
            case 'Feuille':
                return (computerChoice === Choice.PIERRE) ? ResultType.WIN : ResultType.LOSE;
            default:
                return ResultType.INVALID;
        }
    }

    stringToChoice(playerChoice:string){
        switch (playerChoice) {
            case 'Ciseaux':
                return Choice.CISEAUX;
            case 'Pierre':
                return Choice.PIERRE;
            case 'Feuille':
                return Choice.FEUILLE;
            default:
                return Choice.INVALID;
        }
    }

    play(playerChoice: string) {
        this.playerChoice= this.stringToChoice(playerChoice);
        this.computerChoice = Math.random() > 0.33 ? Choice.CISEAUX : Math.random()>0.50 ? Choice.PIERRE : Choice.FEUILLE;


        this.resultOfTheGame = this.whowins(playerChoice, this.computerChoice);
        
        this.showResultMessage = true;

        const gameResult: GameResult = {
            playerChoice: this.playerChoice,
            computerChoice: this.computerChoice ,
            result: this.resultOfTheGame,
            timestamp: new Date()
          };
        
        this.gameService.playGame(gameResult).subscribe(response => {
            console.log(response);
        });
    }

    hideResult() {
        this.resultOfTheGame=ResultType.INVALID;
        this.showResultMessage = false;
    }

}
