
class LocalStorage {
  /**
   * @classdesc
   * Saving information in the browser using the Localstorage API.
   *
   * @class LocalStorage
   * @memberof Prophecy.Storage
   * @constructor
   * @since 1.0.0
   */
  constructor () {
    if (typeof(Storage) === 'undefined') {
      throw new Error('LocalStorage: localStorage is not suppored by this browser.')
    }
  }

  /**
   * Get the stored value identified with the given key.
   * 
   * @param {string} key - The key identifier to retrieve.
   * @returns {*}
   */
  get (key = '') {
    return localStorage.getItem(key)
  }

  /**
   * Set a value stored by a given identifier.
   * 
   * @param {*} key - The unique identifer
   * @param {*} value - The value to store
   */
  set (key = '', value = '') {
    localStorage.setItem(key, value)
  }

  /**
   * Remove a stored item with a given identifier. 
   * 
   * @param {*} key - The key identifier to unset.
   */
  unset (key = '') {
    localStorage.removeItem(key)
  }
}

module.exports = LocalStorage