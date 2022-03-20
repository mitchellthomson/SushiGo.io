export default class Card {
    constructor(scene){
        this.render = (x, y, type) => {
            if(type === "playerCard"){
                sprite = this.playerCardSprite;
            } else {
                sprite = this.opponentCardSprite;
            }
            let card = scene.add.image(x, y, sprite).setScale(1, 1).setInteractive().setData({
                "name": this.name,
                "type": this.type,
                "sprite": this.sprite
            })
            if(type === "playerCard"){
                scene.input.setDraggable(card);
            }
            return card;
        }
    }
}