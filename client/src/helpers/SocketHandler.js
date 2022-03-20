export default class SocketHandler {
    constructor(){
        scene.socket = io("http://localhost:3000");

        scene.socket.on("connect", () => {
            console.log("Connected!");
            scene.socket.emit("dealDeck", scene.socket.id);
        })

        scene.socket.on("firstTurn", (gameState) => {
            scene.GameHandler.changeGameState(gameState);
            if (gameState === "Initalizing"){
                scene.DeckHandler.dealCards(1000, 860, "cardBack", "playerCard");
                scene.dealCards.setInteractive();
                
            }
        })

        scene.socket.on("dealCards", (socketId, cards) => {
            if(socketId === scene.socket.id){
                for (let i in cards) {
                    let card = scene.GameHandler.playerHand.push(scene.DeckHandler.dealCard(155 + (i*155), 860, cards[i], "playerCard"));
                }
            } else {
                for (let i in cards) {
                    let card = scene.GameHandler.opponentHand.push(scene.DeckHandler.dealCard(155 + (i*155), 135, "cardBack", "playerCard"));
                }
            }
        })

        scene.socket.on("cardPlayed", (cardName, socketId) => {
            scene.GameHandler.opponentHand.shift().destroy();
            scene.DeckHandler.dealCard(scene.dropZone.x, scene.dropZone.y, cardName, "opponentCard");
        })
    }
}