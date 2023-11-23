import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameResult } from './models/game-result.model'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://localhost:7246/api/game'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  playGame(gameResult: GameResult): Observable<any> {
    return this.http.post(`${this.apiUrl}/play`, gameResult);
  }

  getScores(): Observable<GameResult[]> {
    return this.http.get<GameResult[]>(`${this.apiUrl}/scores`);
  }
}