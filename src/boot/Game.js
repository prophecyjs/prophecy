const LocalStorage = require('../storage/LocalStorage')

class Game {
  /**
   * @classdesc
   * Prophecy main game instance
   *
   * @class Game
   * @memberof Prophecy
   * @constructor
   * @since 1.0.0
   *
   */
  constructor () {
    this.storage = new LocalStorage()
  }
}

module.exports = Game
