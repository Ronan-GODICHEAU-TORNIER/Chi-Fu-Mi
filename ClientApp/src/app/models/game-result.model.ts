export interface GameResult {
    playerChoice: Choice;
    computerChoice: Choice;
    result?: ResultType;
    timestamp: Date;
}

export enum ResultType {
    WIN = "Vous avez gagné",
    LOSE = "Vous avez perdu",
    DRAW = "Match nul",
    INVALID="Invalide"
}

export enum Choice {
    PIERRE = "Pierre",
    CISEAUX = "Ciseaux",
    FEUILLE = "Feuille",
    INVALID="Invalide"
}