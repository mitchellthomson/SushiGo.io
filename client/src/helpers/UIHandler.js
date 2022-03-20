import ZoneHandler from './ZoneHandler';
export default class UIHandler{
    constructor(scene){

        this.zoneHandler = new ZoneHandler(scene);

        this.buildZone = () => {
            scene.dropZone = this.zoneHandler.renderZone(470, 500);
            this.zoneHandler.renderOutline(scene.dropZone);
        }
        this.buildPlayerAreas = () => {
            scene.playerHandArea = scene.add.rectangle(600, 940, 1100, 100);
            scene.playerHandArea.setStrokeStyle(4, 0x33ff00);
        }
        this.buildGameText = () => {
            scene.dealCards = scene.add.text(960, 445, "Deal Cards").setFontSize(14);
        }

        this.buildUI = () => {
            this.buildZone();
            this.buildPlayerAreas();
            this.buildGameText();
        }
    }
}