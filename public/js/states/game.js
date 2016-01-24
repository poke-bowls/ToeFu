(function() {

var INITIAL_POSITIONS = [
  //player 1
  {
    x : 100, y : 100 },
  //player 2
  {
    x : 600, y : 100 }
];

  //class constructor
  PocketTanks.Game = function() {
    this.player_1;
    this.player_2;
  };

  PocketTanks.Game.prototype.create = function() {
    this.player_1 = new PocketTanks.Player( this.game, 0 );
    this.player_2 = new PocketTanks.Player( this.game, 1 );
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);

    //position players
    this.player_1.x = INITIAL_POSITIONS[0].x;
    this.player_1.y = INITIAL_POSITIONS[0].y;
    this.player_2.x = INITIAL_POSITIONS[1].x;
    this.player_2.y = INITIAL_POSITIONS[1].y;

    // initialize input handler
    this.input = new PocketTanks.GameInput(this);

  };

  PocketTanks.Game.prototype.update = function() {

    //set facing direction
    if( this.player_1.x < this.player_2.x ) {
      this.player_1.facing = PocketTanks.Player.FACING.RIGHT;
      this.player_2.facing = PocketTanks.Player.FACING.LEFT;
    } else {
      this.player_1.facing = PocketTanks.Player.FACING.LEFT;
      this.player_2.facing = PocketTanks.Player.FACING.RIGHT;
    }

  };

  PocketTanks.Game.prototype.shutdown = function() {

  };

  //Input actions
  PocketTanks.Game.prototype.continue = function() {

  };

})();