import Card from "./Card";

export default class ChopSticks extends Card{
    constructor(scene){
        super(scene);
        this.name = "chopSticks"
        this.type = "special"
        this.sprite = "chopSticks"
    }
}