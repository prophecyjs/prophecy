const PIXI = require('pixi')
var CONST = require('./const')

/**
 * Extend a flat object.
 *
 * @param {object} src - extend the dest object with this src object
 * @param {object} dest - extend the this object with the src object
 */
window.extend = function (src, dest) {
// Variables
  let extended = {}
  let deep = false
  let i = 0
  let length = arguments.length

  // Check if a deep merge
  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0]
    i++
  }

  // Merge the object into the extended object
  let merge = function (obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // If deep merge and property is an object, merge properties
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend2(true, extended[prop], obj[prop])
        } else {
          extended[prop] = obj[prop]
        }
      }
    }
  }

  // Loop through each object and conduct a merge
  for (; i < length; i++) {
    let obj = arguments[i]
    merge(obj)
  }

  return extended
}

let Prophecy = {
  Storage: require('./storage'),
  Game: require('./boot/Game'),
  Geom: require('./geom'),
  Math: require('./math'),
  Scene: require('./scene')
}

Prophecy = extend(Prophecy, CONST)

console.log(Prophecy)
module.exports = Prophecy

global.Prophecy = Prophecy
