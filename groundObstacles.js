class GroundObstacles {
    constructor (game){
        this.canvas = game.canvas;
        this.context = game.context;
        let width = canvas.width;
        let height = canvas.height;
        this.x = width;
        this.y = 420;
        this.imageTitle = 'images/pan.png';
        this.itemDamage = 1;
    }

    draw () {
        const image = new Image();
        image.src = this.imageTitle;
        if (image.complete) {
            context.drawImage(image, this.x, this.y)
        }
        else {
            image.addEventListener('load',() => {
                context.drawImage(image, this.x, this.y)
            });
        }
    }

    update (){
        if(frame % 30 === 0 && Math.floor(Math.random() * Math.floor(4)) ===1){
            this.groundObstacles = new GroundObstacles(this);
            groundObstaclesArr.push(this.groundObstacles)
            this.groundObstacles.imageTitle = 'images/fork.png'
            this.groundObstacles.y = 240;
        }

        if (frame % 70 === 0 && Math.floor(Math.random() * 2) === 1) {
            const newObstacle = new GroundObstacles(this);
            newObstacle.imageTitle = 'images/pan.png'; 
            newObstacle.y = 370; 
            groundObstaclesArr.push(newObstacle);
        }

        for(let item of groundObstaclesArr){
            if(item.imageTitle === 'images/fork.png'){
              item.x -= speed * 2;
              item.draw();
            }

            else {
                item.x -= speed;
                item.draw();
            }
        }
    }
}

