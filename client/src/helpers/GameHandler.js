export default class GameHandler {
    constructor(scene){
        this.gameState = "initalizing";
        this.playerDeck = [];
        this.opponentDeck = [[]];
        this.playerHand = [];
        this.opponentHand = [[]];
        this.discardPile = [];

        this.changeGameState = (gameState) => {
            this.gameState = gameState;
            console.log("GameState: "+ this.gameState);
        }
    }
}