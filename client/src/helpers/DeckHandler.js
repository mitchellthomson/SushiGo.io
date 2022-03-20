import Card from "./cards/Card";
import ChopSticks from "./cards/Chopsticks";
import Wasabi from "./cards/Wasabi";

export default class DeckHandler {
    constructor(scene){
        this.dealCard = (x, y, name, type) => {
            let cards = {
                cardBack: new CardBack(scene),
                chopSticks: new ChopSticks(scene),
                wasabi: new Wasabi(scene)
            }
            let newCard = cards[name];
            return (newCard.render(x,y, type));
        }
    }
}