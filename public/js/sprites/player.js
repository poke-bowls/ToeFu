(function(){

//private static variable
var ANIMATIONS = {
  IDLE : {
    name : 'idle',
    frames : [0, 1, 2, 3 ],
    fps : 5
  }
};

//sprite class constructor

PocketTanks.Player = function( game, id, name ) {
  this.game = game;
  this.id = id;
  this.name = name ? name : 'Player ' + (id + 1);

  //super constuctor call
  Phaser.Sprite.call(this, game, 0, 0, PocketTanks.ASSETS.SPRITESHEET.PLAYER.name);

  //set animations
  this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames );

  //play the initial animation
  this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);

};

//extend Sprite prototype
PocketTanks.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constuctor : {
    value : PocketTanks.Player
  }
});

})();