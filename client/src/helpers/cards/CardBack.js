import Card from "./Card";

export default class CardBack extends Cards{
    constructor(scene){
        super(scene);
        this.name = "cardBack"
        this.type = "cardBack"
        this.sprite = "cardBack"
    }
}