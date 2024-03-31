export class MainScene extends Phaser.Scene{
    constructor(){
        super({
            key:"MainScene"
        })
    }

    init(data){
            console.log("hello MainScene");
    }
    preload(){
            // this.load.image("dino_rock_logo","./assets/dino_rock_logo.png")

    }
    create(){
        let audio=this.sound.add("letsPlay");

        let logo= this.add.image(this.game.renderer.width/2,this.game.renderer.height *0.30,"dino_rock_logo").setDepth(1)
        logo.setScale(900/logo.width,900/logo.height)
      
        let play_button= this.add.image(this.renderer.width/2,this.game.renderer.height/2+400,"play_button").setDepth(1)
        play_button.setScale(400/play_button.width,400/play_button.height)

        play_button.setInteractive();


        
        play_button.on("pointerdown",()=>{
            console.log("playy");
            audio.play();
            this.scene.start("PlayGround")
        })

        play_button.on("pointerout",()=>{
            console.log("out");
        })

        // play_button.on("pointerup",()=>{
        //     console.log("playy");
        // })
        // this.scene.start(MenuScene)
                
    }
}