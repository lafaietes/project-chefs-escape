let tempSpriteCount = 0;
let tempDeadCount = 0;
let tempJumpCount = 0;

class Player {
    constructor (game, score){
        this.canvas = game.canvas;
        this.context = game.context;
        this.sound = game.sound;
        let width = canvas.width
        let height = canvas.height;
        this.x = 70;
        this.y = 270;
        this.yv = 10;
        this.speed = speed;
        this.imageLink = 'images/sprite/Walk (1).png'
    }

    draw () {
        if(currentScore <= 0){
            this.imageLink = 'images/sprite/Dead (15).png'
            this.y = 270;
        }
        else {
            if(this.imageLink === 'images/sprite/Jump (10).png'){
                tempJumpCount += 1;
                if(tempJumpCount >= 50){
                    this.y += 100;
                    this.imageLink = 'images/sprite/Walk (1).png';
                    tempJumpCount = 0;
                }
            }
            else if(this.imageLink === 'images/sprite/Dead (5).png'){
                tempDeadCount += 1;
                if(tempDeadCount >= 20){
                    this.imageLink = 'images/sprite/Walk (1).png';
                    tempDeadCount = 0;
                }
            }
            else {
                if(tempSpriteCount=== 0){
                    this.imageLink = 'images/sprite/Walk (1).png';
                }
                else if(tempSpriteCount === 16){
                    this.imageLink = 'images/sprite/Walk (3).png';
                }
                else if(tempSpriteCount === 32){
                    this.imageLink = 'images/sprite/Walk (5).png';
                    tempSpriteCount = 0;
                }
                tempSpriteCount += 1;
            }
        }

        const image = new Image();
        image.src = this.imageLink;
        if (image.complete) {
            context.drawImage(image, this.x, this.y)
          }
        else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y)
            });
        }
    }

    jump () {
        if(this.y !== 170){
            this.imageLink = 'images/sprite/Jump (10).png';
            this.y -= 100;
        }
    }

    crashWithObstacles (arr) {
        game.score.font = '45px Fredoka One'
        for(let item of arr){
            if(item.x > 50 && item.x < 90 && this.y === 270 && currentScore >= 0){
                this.imageLink ='images/sprite/Dead (5).png'
                this.sound.play('hit', { volume: 0.5 });
                currentScore -= item.itemDamage;
                item.itemDamage = 0;
             }
        }
        this.draw()
      }
}