import { MainScene } from "./scene/MainScene.js";
import { LoadAssetsScene } from "./scene/LoadAssetsScene.js";
import { PlayGround } from "./scene/PlayGround.js";


const config={
    type: Phaser.AUTO,

    width:1080,
    height:1920,

 

    backgroundColor: 0xADD8E6,

    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    },

    scene:[LoadAssetsScene,MainScene,PlayGround]

}

const game = new Phaser.Game(config)

