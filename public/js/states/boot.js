//Boot class responsible for pre-loading assets and switching to the game state
//class constructor

PocketTanks.Boot = function() {

};

PocketTanks.Boot.prototype.preload = function() {
  // will preload all assets

  //autoload each asset by type
  Object.keys(PocketTanks.ASSETS).forEach(function(type){
    for( var asset in PocketTanks.ASSETS[type] ){
      PocketTanks.game.load[ type.toLowerCase() ](
        PocketTanks.ASSETS[type][ asset ].name,
        PocketTanks.ASSETS[type][ asset ].path,
        PocketTanks.ASSETS[type][ asset ].width,
        PocketTanks.ASSETS[type][ asset ].height,
        PocketTanks.ASSETS[type][ asset ].frames
      );
    }
  });

};

PocketTanks.Boot.prototype.create = function() {
  //switch to the game state
  this.state.start( PocketTanks.STATES.GAME );
};