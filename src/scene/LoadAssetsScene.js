
export class LoadAssetsScene extends Phaser.Scene{
    constructor(){
        super({
            key:"LoadAssetsScene"
        })
    }

    init(data){
            console.log("hello world");
    }
    preload(){
        this.load.image("dino_rock_logo","./assets/dino_rock_logo.png")
        this.load.image("play_button","./assets/play_button.svg")
        this.load.audio("letsPlay","assets/letsPlay.mp3")


    }
    create(){
            this.scene.start("MainScene")
                
    }
}