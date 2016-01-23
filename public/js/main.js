// create a single global variable

window.PocketTanks = {
  ASSETS : {},
  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', // the div in index.html to render this game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }

};

window.onload = function() {
  PocketTanks.game = new Phaser.Game( PocketTanks.STAGE.WIDTH, PocketTanks.STAGE.HEIGHT, Phaser.AUTO, PocketTanks.STAGE_ID );
  PocketTanks.game.state.add( PocketTanks.STATES.BOOT, PocketTanks.Boot );
  PocketTanks.game.state.add( PocketTanks.STATES.BOOT, PocketTanks.Game );
  PocketTanks.game.state.start( PocketTanks.STATES.BOOT );
};