//Boot class responsible for pre-loading assets and switching to the game state
//class constructor

PocketTanks.Boot = function() {
};

PocketTanks.Boot.prototype.preload = function() {
  // will preload all assets
};

PocketTanks.Boot.prototype.create = function() {
  //switch to the game state
  this.state.start( PocketTanks.STATES.GAME );

};
