import { Component } from '@angular/core';

@Component({
  selector: 'app-chifoumi',
  templateUrl: './chifoumi.component.html',
  styleUrls: ['./chifoumi.component.css']
})
export class ChifoumiComponent {

    constructor() { }

    showResultMessage = false;
    resultMessage = '';


    play() {
        this.resultMessage = Math.random() > 0.5 ? 'Vous avez gagné !' : 'Vous avez perdu !';
        this.showResultMessage = true;
    }

    hideResult() {
        this.showResultMessage = false;
    }
}