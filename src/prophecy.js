var Prophecy = {
  Game: require('./boot/Game'),
  Geom: require('./geom'),
  Math: require('./math'),
}

module.exports = Prophecy;

global.Phaser = Prophecy;