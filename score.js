class Score {
        constructor (game) {
          this.canvas = game.canvas;
          this.context = game.context;
          this.color = 'white'
          this.font = '40px';
        }
      
        draw () {
          context.save();
          context.translate(750, 80);
          context.font = this.font;
          context.fillStyle = this.color;
          context.fillText(`Health: ${ parseInt(currentScore) }`, 0, 0);
          context.restore();
        }


}