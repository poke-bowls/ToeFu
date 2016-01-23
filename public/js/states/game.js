//class constructor

PocketTanks.Game = function() {
  this.player_1;

};

PocketTanks.Game.prototype.create = function() {
  this.player_1 = new PocketTanks.Player( this.game, 0 );
  this.game.add.existing(this.player_1);
};

PocketTanks.Game.prototype.update = function() {

};

PocketTanks.Game.prototype.shutdown = function() {

};