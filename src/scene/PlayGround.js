export class PlayGround extends Phaser.Scene{
    constructor(){
        super({
            key:"PlayGround"
        })
    }

    init(data){
            console.log("hello playgournd");
    }
    preload(){
        this.load.image("navbar","assets/playground_nav.svg")
        this.load.audio("music1","assets/music1.mp3")
        this.load.audio("beep","assets/beep.mp3")

        this.load.image("menu_button","assets/menu_button.svg")
        this.load.image("note_button","assets/note_button.png")
        this.load.image("note_button_pressed","assets/note_button_pressed.png")

        this.load.audio("letsPlay","assets/letsPlay.mp3")

        this.load.image("orange_note","assets/orange_note.png")
        this.load.image("pink_note","assets/pink_note.png")
        this.load.image("blue_note","assets/blue_note.png")


    }

    
    create(){


        let scoreText = this.add.text(16, 16, "Points: 0", {
            fontSize: '40px',
            fill: '#fff'
          }).setDepth(1);
          
          scoreText.setPosition(100,50)
        let scores=0;

        let music=this.sound.add("music1");
        music.play();

        let beep = this.sound.add("beep")

        this.add.image(700,100,"navbar").setDepth(4).setScale(2.8)

     
        let audio=this.sound.add("letsPlay");
     
        let menu=this.add.image(900,60,"menu_button").setDepth(2)
        menu.setScale(200/menu.width,210/menu.height)
        menu.setInteractive();
        menu.on("pointerdown",()=>{
            audio.play();
            music.destroy();
            this.scene.start("MainScene")

        })



        

        let orange_note= this.add.image(200,200,"orange_note").setDepth(3)
        let blue_note= this.add.image(550,200,"blue_note").setDepth(3)
        let pink_note= this.add.image(900,200,"pink_note").setDepth(3)

        orange_note.setScale(200/orange_note.width,200/orange_note.height)
        blue_note.setScale(200/blue_note.width,200/blue_note.height)
        pink_note.setScale(200/pink_note.width,200/pink_note.height)

        orange_note.setInteractive();
        blue_note.setInteractive();
        pink_note.setInteractive();
        

        
        let createOrangeNote = ()=>{
            let new_orange_note=this.add.image(200,200,"orange_note").setDepth(3)
            new_orange_note.setScale(200/new_orange_note.width,200/new_orange_note.height)
            new_orange_note.setInteractive();
        
            this.tweens.add({
                targets: new_orange_note,
                y: 1800, 
                ease: 'Linear',
                duration: 3000,
                onStart:()=>{
                    new_orange_note.on("pointerdown",()=>{
                        new_orange_note.destroy();
                        scores++;
                        scoreText.setText(`Points : ${scores}`)

                    })
                },

                onComplete: () => {
                    new_orange_note.destroy();
                }
            });
    
        }
          
        let createBlueNote = ()=>{
            let blue_note= this.add.image(550,200,"blue_note").setDepth(3)
            blue_note.setScale(200/blue_note.width,200/blue_note.height)
            blue_note.setInteractive();

            this.tweens.add({
                targets: blue_note,
                y: 1800, 
                ease: 'Linear',
                duration: 3000,
                onStart:()=>{
                    blue_note.on("pointerdown",()=>{
                        blue_note.destroy();
                        scores++;
                        scoreText.setText(`Points : ${scores}`)
                    })
                },

                onComplete: () => {
                    blue_note.destroy();
                    
                }
            });

            
        }
  
        let createPinkNote = ()=>{
            let pink_note= this.add.image(900,200,"pink_note").setDepth(3)
            pink_note.setScale(200/pink_note.width,200/pink_note.height)
            pink_note.setInteractive();


            this.tweens.add({
                targets: pink_note,
                y: 1800, 
                ease: 'Linear',
                duration: 3000,
                onStart:()=>{
                    pink_note.on("pointerdown",()=>{
                        pink_note.destroy();
                        scores++;
                        scoreText.setText(`Points : ${scores}`)
                    })
                },
                onComplete: () => {
                    pink_note.destroy();
                }
            });



   
        }




        // let tween_function = (music_note)=> {

        //     let tween = this.add.tween({
        //         targets: music_note,
        //         props:{
        //             y: 2000
        //         },
        //         ease:'Linear',
        //         duration: 4000,
                
        //     });
    
        //     tween.on("complete",()=>{
        //         // tween_function();
        //         // if (music_note==="orange_note") {
        //         //     createOrangeNote();
        //         // }
        //         // else if(music_note==="blue_note"){
        //         //     createBlueNote();
        //         // }
        //         // else if(music_note==="pink_note"){
        //         //     createPinkNote();
        //         // }
        //         music_note.destroy();
        //     })
            
        //     tween.play();
    
        // }

        // tween_function(orange_note);
        // tween_function(blue_note);
        // tween_function(pink_note);

        // const noteTimes = [1000, 3000, 5000]; 

        // noteTimes.forEach((time,i)=>{
        //     this.time.delayedCall(time,()=>{
        //         const note = createOrangeNote.call();
        //     })
        // })

        // createOrangeNote();

        const timeline = this.add.timeline();

        timeline.play();


        timeline.add({
            in: 1000/2,
            run: () => {
                createOrangeNote()
                }
        })  
        timeline.add({
            in: 1000/10,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 2000/2,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 2000,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 2500,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 3000,
            run: () => {
                createPinkNote()
                }
        })
        timeline.add({
            in: 3200,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 3300,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 4000,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 4300,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 4500,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 5200,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 6000,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 6500,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 6800,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 7200,
            run: () => {
                createOrangeNote()
                }
        }) 
        timeline.add({
            in: 7700,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 8500,
            run: () => {
                createPinkNote()
                }
        })
        timeline.add({
            in: 9000,
            run: () => {
                createPinkNote()
                }
        })   
        timeline.add({
            in: 9500,
            run: () => {
                createPinkNote()
                }
        })
        timeline.add({
            in: 10500,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 10900,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 11500,
            run: () => {
                createOrangeNote()
                }
        })
        timeline.add({
            in: 11800,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 12500,
            run: () => {
                createPinkNote()
                }
        })
        timeline.add({
            in: 13500,
            run: () => {
                createPinkNote()
                }
        }) 
          timeline.add({
            in: 14000,
            run: () => {
                createPinkNote()
                }
        })
        timeline.add({
            in: 14500,
            run: () => {
                createBlueNote()
                }
        })
        timeline.add({
            in: 14900,
            run: () => {
                createPinkNote()
                }
        })
        
        

                

    
        let note_btn= this.add.image(200,1740,"note_button").setDepth(3)
        let note_btn2= this.add.image(550,1740,"note_button").setDepth(3)
        let note_btn3= this.add.image(900,1740,"note_button").setDepth(3)


        note_btn.setScale(200/note_btn.width,200/note_btn.height)
        note_btn2.setScale(200/note_btn.width,200/note_btn.height)
        note_btn3.setScale(200/note_btn.width,200/note_btn.height)

        note_btn.setInteractive(); 
        note_btn2.setInteractive(); 
        note_btn3.setInteractive(); 
    

        note_btn.on("pointerdown", () => {
            note_btn.setTexture("note_button_pressed");

            if (orange_note) {
             let   orange_bounds=orange_note.getBounds();
             let   note_btnbounds=note_btn.getBounds();
             if (Phaser.Geom.Intersects.RectangleToRectangle(orange_bounds, note_btnbounds))
                    {
                    console.log("PERFECT ORANGE");
                    music.setVolume(0.5); 
                    orange_note.destroy();
                }else{
                    beep.play();
                    music.setVolume(0.2);
                    console.log("MISSED");
                    scores--;
                    scoreText.setText(`Points : ${scores}`)
    
                }
            }});
        note_btn.on("pointerup",()=>{
            note_btn.setTexture("note_button");

        })
        

        note_btn2.on("pointerdown", () => {
            note_btn2.setTexture("note_button_pressed");

            if (blue_note &&  Phaser.Geom.Intersects.RectangleToRectangle(blue_note.getBounds(), note_btn2.getBounds())) {
                console.log("PERFECT BLUE");
                blue_note.destroy();
                music.setVolume(0.5);
                // createOrangeNote();
         
            } else {
                beep.play();
                music.setVolume(0.2);
                console.log("MISSED");
                scores--;
                scoreText.setText(`Points : ${scores}`)
            }
        });

        note_btn2.on("pointerup",()=>{
            note_btn2.setTexture("note_button");

        })


        note_btn3.on("pointerdown", () => {
            note_btn3.setTexture("note_button_pressed");

            if (pink_note &&  Phaser.Geom.Intersects.RectangleToRectangle(pink_note.getBounds(), note_btn3.getBounds())) {
                console.log("PERFECT PINK");
                music.setVolume(0.5); 
                pink_note.destroy();
            } else {
                beep.play();
                // music.setVolume(0.2);
                console.log("MISSED");
                scores--;
                scoreText.setText(`Points : ${scores}`)

            }
        });
        note_btn3.on("pointerup",()=>{
            note_btn3.setTexture("note_button");

        })

        

    }
}
