import CardHandler from "../helpers/CardHandler";
import DeckHandler from "../helpers/DeckHandler";
import GameHandler from "../helpers/GameHandler";
import InteractiveHandler from "../helpers/InteractiveHandler";
import SocketHandler from "../helpers/SocketHandler";
import UIHandler from "../helpers/UIHandler";

export default class Game extends Phaser.Scene {
    constructor (){
        super({
            key: "Game"
        })
    }

    preload(){
        this.load.image("cardBack", "src/assets/CardBack.png");
        this.load.image("chopSticks", "src/assets/ChopSticks.png");
        this.load.image("dumpling", "src/assets/Dumpling.png");
        this.load.image("eggNigiri", "src/assets/EggNigiri.png");
        this.load.image("makiOne", "src/assets/MakiOne.png");
        this.load.image("makiTwo", "src/assets/MakiTwo.png");
        this.load.image("makiThree", "src/assets/MakiThree.png");
        this.load.image("pudding", "src/assets/Pudding.png");
        this.load.image("salmonNigiri", "src/assets/SalmonNigiri.png");
        this.load.image("sashimi", "src/assets/Sashimi.png");
        this.load.image("squidNigiri", "src/assets/SquidNigiri.png");
        this.load.image("tempura", "src/assets/Tempura.png");
        this.load.image("wasabi", "src/assets/Wasabi.png");

    }

    create(){
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
    }

    update(){

    }
}