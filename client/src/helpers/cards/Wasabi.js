import Card from "./Card";

export default class Wasabi extends Card{
    constructor(scene){
        super(scene);
        this.name = "wasabi"
        this.type = "special"
        this.sprite = "wasabi"
    }
}