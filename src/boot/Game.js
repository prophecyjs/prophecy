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
  constructor (options) {
    PIXI.utils.skipHello()

    /**
     * Game width.
     *
     * @type {number}
     * @default 800
     */
    this.width = options.width || 800

    /**
     * Game Height.
     *
     * @type {number}
     * @default 600
     */
    this.height = options.height || 600

    /**
     * The game background color.
     *
     * @type {number}
     * @default 0x0
     */
    this.backgroundColor = options.backgroundColor || 0x000000

    let app = new PIXI.Application(this.width, this.height, {
      backgroundColor: this.backgroundColor,
    })

    document.body.appendChild(app.view)

    this.sayHello()
  }

  sayHello () {
    if (window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      const args = [
        `\n %c %c %c ${Prophecy.Engine.name} ${Prophecy.Engine.version.toFixed(2)} - ✰ ✰  %c  %c  ${Prophecy.Engine.url}  %c %c ♥%c♥%c♥ \n\n`,
        'background: #ff66a5; padding:5px 0;',
        'background: #ff66a5; padding:5px 0;',
        'color: #ff66a5; background: #030307; padding:5px 0;',
        'background: #ff66a5; padding:5px 0;',
        'background: #ffc3dc; padding:5px 0;',
        'background: #ff66a5; padding:5px 0;',
        'color: #ff2424; background: #fff; padding:5px 0;',
        'color: #ff2424; background: #fff; padding:5px 0;',
        'color: #ff2424; background: #fff; padding:5px 0;'
      ]

      window.console.log.apply(console, args)
    } else if (window.console) {
      window.console.log(`${EngineInfo.name} ${EngineInfo.version.toFixed(2)}`)
    }
  }
}

module.exports = Game
