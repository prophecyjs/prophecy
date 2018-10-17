
class Point {

  /**
   * @classdesc
   * Class for Point calculations.
   *
   * @class Point
   * @memberof Prophecy.Geom
   * @constructor
   * @since 1.0.0
   *
   * @param {number} [x=0] - the x value
   * @param {number} [y=0] - the y value
   */
  constructor (x = 0, y = 0) {

    /**
     * @member {number}
     * @default 0
     */
    this.x = x

    /**
     * @member {number}
     * @default 0
     */
    this.y = y
  }

  /**
   * Creates a clone of this point
   *
   * @return {Prophecy.Geom.Point} a copy of the point
   */
  clone () {
    return new Point(this.x, this.y)
  }

  /**
   * Copies x and y from the given point
   *
   * @param {Prophecy.Geom.Point} p - The point to copy.
   */
  copy (p) {
    this.set(p.x, p.y)
  }

  /**
   * Returns true if the given point is equal to this point
   *
   * @param {Prophecy.Geom.Point} p - The point to check
   * @returns {boolean} Whether the given point equal to this point
   */
  equals (p) {
    return (p.x === this.x) && (p.y === this.y)
  }

  /**
   * Sets the point to a new x and y position.
   * If y is omitted, both x and y will be set to x.
   *
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  set (x, y) {

    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || ((y !== 0) ? this.x : 0)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Point
}