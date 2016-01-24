(function(){

//private static variable
var ANIMATIONS = {
  IDLE : {
    name : 'idle',
    frames : [ 0, 1, 2, 3 ],
    fps : 5
  }
};

var FACING_FACTOR = {
  LEFT : -1,
  RIGHT : 1
};

function select_sprite_row( player_id ) {
  return function( frame_id ) {
    return frame_id + player_id*PocketTanks.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
  };
}

//sprite class constructor

  PocketTanks.Player = function( game, id, name ) {
    this.game = game;
    this.id = id;
    this.name = name ? name : 'Player ' + (id + 1);
    this.facing; //direction that player is facing. State updates this

    //super constuctor call
    Phaser.Sprite.call(this, game, 0, 0, PocketTanks.ASSETS.SPRITESHEET.PLAYER.name);

    //set center registration point
    this.anchor = { x : 0.5, y : 0.5 };

    //set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

    //play the initial animation
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);

  };

  //extend Sprite prototype
  PocketTanks.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constuctor : {
      value : PocketTanks.Player
    }
  });

  //public static variable
  PocketTanks.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  //is invoked on every frame
  PocketTanks.Player.prototype.update = function() {

    //update facing
    this.scale.x = FACING_FACTOR[ this.facing ];

  };

  PocketTanks.Player.prototype.jump = function() {


  };

  PocketTanks.Player.prototype.dive = function() {

  };

  PocketTanks.Player.prototype.dive_stop = function() {

  };

  PocketTanks.Player.prototype.step_left = function() {
    console.log( 'stepping left' );
  };

  PocketTanks.Player.prototype.step_right = function() {

  };

  //stop stepping left or right
  PocketTanks.Player.prototype.stop = function() {

  };

})();