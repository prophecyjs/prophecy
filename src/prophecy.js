var Prophecy = {
  Geom: require('./geom'),
  Math: require('./math'),
}

module.exports = Prophecy;

global.Phaser = Prophecy;